import {test,expect} from '@playwright/test'
// Auto wait

test("Navigation to Installation Page",async({page})=>{
    await page.goto('https://playwright.dev/');
    await page.locator(".getStarted_Sjon").click();
    await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Installation");
})
