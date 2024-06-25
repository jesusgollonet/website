import { chromium } from "playwright";
import { readdir } from "node:fs/promises";

(async () => {
  const pages = await readdir("build/posts", { withFileTypes: true });
  console.log(pages);
  //for (const p of pages) {
  //const browser = await chromium.launch();
  //const context = await browser.newContext();
  //const page = await context.newPage();
  //await page.goto(p.url);
  //await page.screenshot({ path: `previews/${p.name}.png` });
  //await browser.close();
  //}
})();
