import { chromium } from "playwright";
import { ChildProcess, spawn } from "node:child_process";

const IMG_W = 800;
const IMG_H = 418;

const runDevServer = (): Promise<ChildProcess> => {
  return new Promise((resolve, reject) => {
    const devServer = spawn("yarn", ["serve-out"], {
      stdio: ["pipe", "pipe", "inherit"],
    });
    devServer.stdout.on("data", (data) => {
      if (data.includes("Available on:")) {
        resolve(devServer);
      }
    });
    devServer.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
  });
};

(async () => {
  const devServer = await runDevServer();

  // make sure server is properly killed
  process.on("SIGINT", () => {
    console.log("SIGINT received");
    devServer.kill();
  });
  process.on("SIGTERM", () => {
    console.log("SIGTERM received");
    devServer.kill();
  });
  process.on("exit", () => {
    console.log("exit received");
    devServer.kill();
  });

  console.log("Dev server is running");

  const browser = await chromium.launch();

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://localhost:8080/diary");
  const linkSelector = "a.diaryLink";
  console.log(linkSelector);

  const diaryPages = await page.$$eval(linkSelector, (els) =>
    els.map((el) => el.getAttribute("href")),
  );
  console.log("diaryPages", diaryPages);

  for (const p of diaryPages) {
    if (!p) {
      return;
    }
    const browser = await chromium.launch();
    // width: 1200, height: 630
    const context = await browser.newContext();
    const page = await context.newPage();
    const pageUrl = `http://localhost:8080${p}`;
    page.setViewportSize({ width: IMG_W, height: IMG_H });
    await page.goto(pageUrl, { waitUntil: "networkidle" });
    const urlParts = p.split("/");
    const fileName = urlParts[urlParts.length - 2];
    console.log("fileName", fileName);
    await page.screenshot({ path: `out/images/social/${fileName}.png` });
    await browser.close();
  }
  devServer.kill();
  process.exit(0);
})();
