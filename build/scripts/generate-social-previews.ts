import { chromium } from "playwright";
import { readdir } from "node:fs/promises";

(async () => {
  const pageList = await readdir("./posts");
  const pageUrlPaths = pageList.map((p) =>
    p.split("_")[1].replace(/\.md$/, ""),
  );
  for (const p of pageUrlPaths) {
    const browser = await chromium.launch();
    // width: 1200, height: 630
    const context = await browser.newContext();
    const page = await context.newPage();
    const pageUrl = `http://localhost:3000/posts/${p}`;
    console.log(pageUrl);
    page.setViewportSize({ width: 700, height: 300 });
    await page.goto(pageUrl, { waitUntil: "networkidle" });

    await page.screenshot({ path: `public/images/social/${p}.png` });
    await browser.close();
  }
})();
