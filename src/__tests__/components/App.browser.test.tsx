import puppeteer, { Browser, Page } from "puppeteer";
import jestDevServer from "jest-dev-server";

describe("App component browser tests", () => {
  let browser: Browser, page: Page;

  jest.setTimeout(30_000);

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await jestDevServer.setup({
      command: "yarn serve:with-build",
      port: 3000,
      launchTimeout: 20_000
    });
  });

  afterAll(async () => {
    browser.close();
    await jestDevServer.teardown();
  });

  it("renders the page", async () => {
    page.emulate({
      viewport: {
        width: 1920,
        height: 1080
      },
      userAgent: "long-browser"
    });

    await page.goto("http://localhost:3000");
    await page.waitForSelector("header");

    const text = await page.$eval("h2", (e) => e.textContent);

    expect(text).toContain("Car Hire – Search, Compare & Save");
  });

  it("renders with menu icon on small display", async () => {
    page.emulate({
      viewport: {
        width: 400,
        height: 800
      },
      userAgent: "long-browser"
    });

    await page.goto("http://localhost:3000");
    await page.waitForSelector(`header button > img[alt="Menu Icon"]`, {
      visible: true
    });

    const styles = await page.$$eval(
      `header button > img:not([alt="Menu Icon"])`,
      (elems) => elems.map((e) => window.getComputedStyle(e))
    );

    expect(styles.length).toBe(1);
    expect(styles[0].display).not.toBe("block");
  });
});
