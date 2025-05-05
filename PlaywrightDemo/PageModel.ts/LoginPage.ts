import { BrowserContext, Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";

export class LoginPage extends BasePageModel{
    
    userNameInput:string="#username";
    passwordInput:string ="#password";
    signInBtn:string=".radius";
    constructor(page:Page,context?:BrowserContext){
            super(page,context);
        }
    
    async fillUserName(userNameText:string){
        const username= await this.getLocator(this.userNameInput);
        await this.fillText(username,userNameText);
    }
    
    async fillPassword(passwordText:string){
        const password= await this.getLocator(this.passwordInput);
        await this.fillText(password,passwordText);
    }

    async clickOnSignIn(){
        const signInBtn = await this.getLocator(this.signInBtn);
        await this.clickOnElement(signInBtn);
    }
}