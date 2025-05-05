import { expect } from "@playwright/test";
import {fixtureTest} from './../Fixtures/Fixture.ts'
import testdata from './../TestData/LoginData.json'

const qaData = testdata[process.env.ENVIRONMENT];

fixtureTest("@smoke,@p1 Interacting with Input fields", async ({ page},testInfo) => {
  fixtureTest.slow();
    let text = 'SuperSecretPassword!'; 
    await fixtureTest.step('Open the Authencation form',async()=>{
      await page.goto("/login");
      //await page.getByText("Form Authentication").click();
    }) 
    
    let userNameField = page.locator("#username");
    let passwordField = page.locator("#password");
    await fixtureTest.step('Enter username',async()=>{
      await page
      .locator("#username")
      .pressSequentially("tomsmith", { delay: 300 });
      
    })
   
    await fixtureTest.step('Enter Password',async()=>{
      await page.locator("#password1").fill(text);

    })
    
    await fixtureTest.step('Click on Login',async()=>{
      await page.locator("#password1").fill(text);
      await page.locator(".radius").click();

    })
    
    await fixtureTest.step('Validate login is successfull',async()=>{
      await expect(page.locator('.subheader')).toHaveText('Welcome to the Secure Area. When you are done click logout below.');    
    })
  });

  fixtureTest.only('This is a page Model demo test',async({page,homePage,loginPage,securePage})=>{
    // const homePage= new HomePage(page);
    // const loginPage = new LoginPage(page);
    // const securePage = new SecurePage(page);

    // await test.step('Navigating to Hero KuApp',async()=>{
    //     await homePage.goto("https://the-internet.herokuapp.com/");
    // });

    await fixtureTest.step('Click on Form Authenication Link',async()=>{
        await homePage.NavigateToLoginPage();
    })

    await fixtureTest.step('Login into the App',async()=>{
        await loginPage.fillUserName(qaData.username);
        await loginPage.fillPassword(qaData.password);
        await loginPage.clickOnSignIn();
    })

    await fixtureTest.step('Validate Login Action',async()=>{
        await securePage.validateSubHeaderText('Welcome to the Secure Area. When you are done click logout below.');
    })


    
})