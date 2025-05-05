import { BrowserContext, Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";


export class HomePage extends BasePageModel{

    formAuthencation:string ='[href="/login"]';
    loginPageLink:string='[href="/login"]';
    constructor(page:Page,context?:BrowserContext){
        super(page,context);
    }

    async NavigateToLoginPage(){
        const locator = await this.getLocator(this.loginPageLink);
        await this.clickOnElement(locator);
    }
}