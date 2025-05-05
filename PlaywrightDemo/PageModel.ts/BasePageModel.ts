import { BrowserContext, expect, Locator, Page } from "@playwright/test";

export class BasePageModel {
  page: Page;
  context?: BrowserContext;
  constructor(page: Page, context?: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  async goto(url: string) {
    console.log("Navigating to url" + url);
    await this.page.goto(url);
  }

  async getLocator(locatorString: string): Promise<Locator> {
    console.log("Getting the locator for " + locatorString);
    return this.page.locator(locatorString);
  }

  async clickOnElement(locator: Locator): Promise<void> {
    console.log("Click on element" + locator);
    await locator.click();
  }

  async fillText(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  async pressSequentially(locator: Locator, text: string): Promise<void> {
    await locator.pressSequentially(text);
  }

  async uploadFile(page: Page, locator: string, files: string[]) {
    const fileChooserPromise = page.waitForEvent("filechooser");
    await page.locator(locator).click();
    const fileChoose = await fileChooserPromise;
    await fileChoose.setFiles(files);
  }

  async downloadFile(page: Page, locator: string, path: string) {
    const downloadPromise = page.waitForEvent("download");
    await page.getByText(locator).click();
    const download = await downloadPromise;
    await download.saveAs(path + download.suggestedFilename());
  }

  async validateTextOfElement(locator:Locator, text:string){
    await expect(locator).toHaveText(text);
  }
}
