import { chromium } from "playwright";
import { readdir } from "node:fs/promises";
import { ChildProcess, spawn } from "node:child_process";

const runDevServer = (): Promise<ChildProcess> => {
  return new Promise((resolve, reject) => {
    const devServer = spawn("yarn", ["serve-out"], {
      stdio: ["pipe", "pipe", "inherit"],
    });
    devServer.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
      if (data.includes("Available on:")) {
        console.log("ready but lets wait 5 more seconds");
        setTimeout(() => {
          resolve(devServer);
        }, 5000);
      }
    });
    devServer.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
  });
};

(async () => {
  const devServer = await runDevServer();
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

  const pageUrlPaths = ["attending-recurse-center", "resuming-exercise"];
  for (const p of pageUrlPaths) {
    const browser = await chromium.launch();
    // width: 1200, height: 630
    const context = await browser.newContext();
    const page = await context.newPage();
    const pageUrl = `http://localhost:8080/posts/${p}/`;
    console.log(pageUrl);
    page.setViewportSize({ width: 700, height: 300 });
    await page.goto(pageUrl, { waitUntil: "networkidle" });
    console.log("before screenshot");
    await page.screenshot({ path: `out/images/social/${p}.png` });
    console.log("screenshot taken");
    await browser.close();
  }
  console.log("weredone, kill");
  devServer.kill();
  process.exit(0);
  console.log("killed");
})();
