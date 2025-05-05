import { BrowserContext, Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";

export class SecurePage extends BasePageModel {
  
    subHeader:string='.subheader';
    constructor(page: Page, context?: BrowserContext) {
    super(page, context);
  }

  async validateSubHeaderText(headerText:string){
    const subHeaderLocator = await this.getLocator(this.subHeader);
    await this.validateTextOfElement(subHeaderLocator,headerText);
  }
}
