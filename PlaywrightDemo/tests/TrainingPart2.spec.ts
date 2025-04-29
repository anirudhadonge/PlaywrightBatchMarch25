import { test, expect, Page, BrowserContext, Locator } from "@playwright/test";
test.describe('Test executed in herokuapp part2',async()=>{
  
    test("Hover test", async ({ page }) => {
      await page.goto("https://the-internet.herokuapp.com/");
      await page.locator('[href="/hovers"]').click();
      await page.locator(".figure img").nth(0).hover();
      await expect(page.locator(".figcaption h5").nth(0)).toHaveText("name: user1");
    });
    
    test("Window handle test", async ({ page, context }) => {
      //const book = await context.newPage();
      await page.goto("https://the-internet.herokuapp.com/");
      await page.locator('[href="/windows"]').click();
      const newPage = await newPageClick(context, page, '[href="/windows/new"]');
      await expect(newPage.locator(".example h3")).toHaveText("New Window");
      await expect(page.locator(".example h3")).toHaveText("Opening a new window");
      await page.goto("https://www.google.com");
      //console.log('Working Directory:'+ process.cmd())// Nodejs is trigger directory
      console.log("__dirname:", __dirname); // From where you are executing the file.
    });
    
    async function newPageClick(
      context: BrowserContext,
      page: Page,
      locator: string
    ): Promise<Page> {
      const pagePromise = context.waitForEvent("page");
      await page.locator(locator).click();
      return await pagePromise;
    }
    
    test("Authentication pop test", async ({ browser }) => {
      const context = await browser.newContext({
        httpCredentials: {
          username: "admin",
          password: "admin",
        },
      });
      const page = await context.newPage();
      await page.goto("https://the-internet.herokuapp.com/");
      await page.locator('[href="/digest_auth"]').click();
      await expect(page.locator(".example p")).toHaveText(
        "Congratulations! You must have the proper credentials."
      );
    });
    
    test("Drag and drop test", async ({ page }) => {
      await page.goto("https://the-internet.herokuapp.com/");
      await page.locator('[href="/drag_and_drop"]').click();
      const source = page.locator("#column-a");
      const dist = page.locator("#column-b");
      await expect(source).toHaveText("A");
      await expect(dist).toHaveText("B");
      await source.dragTo(dist);
      await expect(source).toHaveText("B");
      await expect(dist).toHaveText("A");
    });
    
    test("Javascript alert test", async ({ page }) => {
      await page.goto("https://the-internet.herokuapp.com/");
      await page.locator('[href="/javascript_alerts"]').click();
      const jsAlert = page.locator('[onclick="jsAlert()"]');
      const jsConfirm = page.locator('[onclick="jsConfirm()"]');
      const jsPrompt = page.locator('[onclick="jsPrompt()"]');
    
      // page.on("dialog", (dialog) => {
      //   console.log(dialog.message());
      //   dialog.accept();
      //   //dialog.dismiss();
      // });
      // await handleJsPopUP(jsAlert,page,true);
      // await expect(page.locator("#result")).toHaveText('You successfully clicked an alert');
      // await handleJsPopUP(jsConfirm,page,false);
      // await expect(page.locator("#result")).toHaveText('You clicked: Cancel');
      await handleJsPopUP(jsConfirm,page,true);
      await expect(page.locator("#result")).toHaveText('You clicked: Ok');
      //await jsAlert.click();
      //await jsConfirm.click();
    //   await expect(page.locator("#result")).toHaveText(
    //     "You entered: This is demo for jsPromp"
    //   );
      //
      //await expect(page.locator("#result")).toHaveText('You successfully clicked an alert');
    });
    
    async function handleJsPopUP(
      locator: Locator,
      page: Page,
      flag: boolean,
      message: string = ""
    ) {
      page.on("dialog", (dialog) => {
        console.log(dialog.message());
        if (flag) {
            if(message==''){
                dialog.accept();
            }else{
                dialog.accept(message);
            }
        } else {
          dialog.dismiss();
        }
        //dialog.dismiss();
      });
      await locator.click();
    }
    
    test("Wait Demo", async ({ page }) => {
      await page.goto("https://the-internet.herokuapp.com/");
      //await page.waitForTimeout(5000);
      //await page.waitForLoadState("networkidle",{timeout:10000});
      const drdp = page.locator('[href="/drag_and_drop"]');
      //await expect(drdp).
      // await drdp.waitFor({state:'visible',timeout:10000});
      await drdp.click();
      await expect(page).toHaveTitle('The Internet');
      await expect(page).toHaveURL('https://the-internet.herokuapp.com/drag_and_drop');
    });
  })