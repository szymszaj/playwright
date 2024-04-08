import { expect, type Locator, type Page, Expect } from "@playwright/test";

export class HomePage {
  //variables
  readonly page: Page;
  //  await page.getByRole("link", { name: "Get started" }).click();
  readonly getStatedButton: Locator;
  // await expect(page).toHaveTitle(/Playwright/);
  readonly title: RegExp;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.getStatedButton = page.getByRole("link", { name: "Get started" });
    this.title = /Playwright/;
  }

  //methods

  async clickGetStarted() {
    await this.getStatedButton.click();
  }

  async assertPageTitle() {
    await expect(this.page).toHaveTitle(this.title);
  }
}
export default HomePage;
