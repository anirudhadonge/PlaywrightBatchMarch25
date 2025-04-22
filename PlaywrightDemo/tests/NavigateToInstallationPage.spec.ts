import {test,expect} from '@playwright/test'
// Auto wait

test("Navigation to Installation Page",async({page})=>{
    await page.goto('https://playwright.dev/');
    let getStarted = await page.locator("");
    getStarted.screenshot();
    getStarted.click();
    await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Installation");
})

test("Example for GetByRole method",async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    //await page.locator('[href="/checkboxes"]').click();
    //await expect(page.getByLabel("Password")).toBeVisible();
    // await page.getByPlaceholder("Enter your company").nth(0).fill("Tata Motors");
    await page.getByRole('button').nth(0).click();
    console.log("Before Clicking")
    await page.getByText("Submit").nth(0).click();
    console.log("After click Clicking")
    await page.pause();
    //await page.getByTitle("Enter your first crush name").fill("example");

    //await page.getByTestId()

    //await page.pause();
})
/**
 * Fill();
 * Presequentially();
 */


test('Interacting with Input fields',async({page})=>{

    let text = `This is where you can log into the secure area. 
    Enter tomsmith for the username and SuperSecretPassword! for the password. 
    If the information is wrong you should see error messages.`
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByText('Form Authentication').click();
    let userNameField = page.locator("#username");
    let passwordField = page.locator("#password");
    await page.locator("#username").pressSequentially("tomsmith",{delay:1000});
    await page.locator("#password").fill(text)
})
//selectOptions
// using the Value Attribue
// using label
// using Index 
test('Interaction with Select tags',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByText('Dropdown').click();
    await page.locator("#dropdown").selectOption({value:'1'});
    await page.locator("#dropdown").selectOption({label:"Option 2"})
    await page.locator("#dropdown").selectOption({index:1})
})

test('Interacting with Checkboxes or radio button',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByText('Checkboxes').click();
    //await page.locator("#checkboxes input").nth(0).check();
    if(!await page.locator("#checkboxes input").nth(0).isChecked()){
        await page.locator("#checkboxes input").nth(0).click();
    }
})


test('Uploading files',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByText('File Upload').click()
    const fileChoose = page.waitForEvent('filechooser');
    //await page.locator("#file-upload").setInputFiles("./UploadFiles/1000_F_561609331_cmOdHBvlRGhWqPZuB1QBLLlc6nQ1m1eq.jpg");
    await page.locator("#file-upload").click();
    const fileCs = await fileChoose;
    fileCs.setFiles("C:\\UploadFiles\\1000_F_561609331_cmOdHBvlRGhWqPZuB1QBLLlc6nQ1m1eq.jpg");
});

test.only('Interacting with Iframe/Frames',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('[href="/frames"]').click();
    await page.locator('[href="/nested_frames"]').click();
    const topFrame = page.frameLocator('[src="/frame_top"]');
    const leftTopFrame = topFrame.frameLocator('[src="/frame_left"]')
    await expect(leftTopFrame.locator('body')).toContainText('LEFT');
    //await page.locator('[href="/iframe"]').click();
    // const frameLocator = page.frameLocator('#mce_0_ifr');
    // await expect(frameLocator.locator('#tinymce p')).toHaveText('Your content goes here.');
})