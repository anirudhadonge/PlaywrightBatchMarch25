import {test,expect} from '@playwright/test'
// Auto wait

test("Navigation to Installation Page",async({page})=>{
    await page.goto('https://playwright.dev/');
    let getStarted = await page.locator("");
    getStarted.screenshot();
    getStarted.click();
    await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Installation");
})

test.only("Example for GetByRole method",async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    //await page.locator('[href="/checkboxes"]').click();
    //await expect(page.getByLabel("Password")).toBeVisible();
    // await page.getByPlaceholder("Enter your company").nth(0).fill("Tata Motors");
    // //await page.getByRole('button').nth(0).click();
    console.log("Before Clicking")
    await page.getByText("Submit").nth(0).click();
    console.log("After click Clicking")
    await page.pause();
    //await page.getByTitle("Enter your first crush name").fill("example");

    //await page.getByTestId()

    //await page.pause();
})
