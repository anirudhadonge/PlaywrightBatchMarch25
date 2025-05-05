import {test } from '@playwright/test'
import { LoginPage } from '../PageModel.ts/LoginPage'
import { SecurePage } from '../PageModel.ts/SecurePage'
import { HomePage } from '../PageModel.ts/HomePage'

interface fixtureObject {
    homePage:HomePage,
    loginPage:LoginPage,
    securePage:SecurePage
}
export const fixtureTest = test.extend<fixtureObject>(
{
homePage: async({page},use)=>{
          const home = new HomePage(page);
          home.goto(process.env.URL);
          use(home);
},
loginPage: async({page},use)=>{
    const login = new LoginPage(page);
    use(login);
},
securePage:async({page},use)=>{
    const secure = new SecurePage(page);
    use(secure);
}
})