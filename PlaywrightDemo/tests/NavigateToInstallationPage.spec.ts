import { test, expect, Page, BrowserContext, Locator, TestInfo } from "@playwright/test";
// Auto wait

test.beforeAll('Before all for part1',async()=>{
  console.log('Before All at the File Level');
})

test.afterAll('THis is After all on the file Level',async()=>{
  console.log('After All at the File Level');
})


test("Navigation to Installation Page", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  let getStarted = await page.locator("");
  getStarted.screenshot();
  getStarted.click();
  await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText(
    "Installation"
  );
});

test("Example for GetByRole method", async ({ page }) => {
  await page.goto("https://selectorshub.com/xpath-practice-page/");
  //await page.locator('[href="/checkboxes"]').click();
  //await expect(page.getByLabel("Password")).toBeVisible();
  // await page.getByPlaceholder("Enter your company").nth(0).fill("Tata Motors");
  await page.getByRole("button").nth(0).click();
  console.log("Before Clicking");
  await page.getByText("Submit").nth(0).click();
  console.log("After click Clicking");
  await page.pause();
  //await page.getByTitle("Enter your first crush name").fill("example");

  //await page.getByTestId()

  //await page.pause();
});
/**
 * Fill();
 * Presequentially();
 */

test.describe('All test were execute on heroKuapp part1',async()=>{
  test.beforeAll('Before all for part1',async()=>{
    console.log('Before All on Describe block');
  })

  test.beforeEach('Navigation to HeroKuApp',async({page})=>{
    console.log('This is a before each block');
    await test.step('Navigate to Hero Kuapp',async()=>{
      await page.goto("/");
    })
    
  })

  test.afterEach("THis is a after each block",async()=>{
    console.log('This is a After each block');
  })

  test.afterAll('THis is After all in describe block',async()=>{
    console.log('After All on Describe block');
  })

  
  async function attachScreenShot(testInfo:TestInfo, page:Page):Promise<void>{
    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  }
  //selectOptions
  // using the Value Attribue
  // using label
  // using Index
  test("@Regression,@p2 Interaction with Select tags", async ({ page }) => {
    await page.getByText("Dropdown").click();
    await page.locator("#dropdown").selectOption({ value: "1" });
    await page.locator("#dropdown").selectOption({ label: "Option 2" });
    await page.locator("#dropdown").selectOption({ index: 1 });
  });
  
  test("Interacting with Checkboxes or radio button",{
    tag:"@checked"
  }, async ({ page }) => {

    await page.getByText("Checkboxes").click();
    //await page.locator("#checkboxes input").nth(0).check();
    if (!(await page.locator("#checkboxes input").nth(0).isChecked())) {
      await page.locator("#checkboxes input").nth(0).click();
    }
    let a = 5;
    //await page.locator("#checkboxes input").nth(0).click();
    //expect(a).toBeDefined();
    await expect(page.locator("#checkboxes input").nth(0)).toBeChecked({
      timeout:1000
    });
  });
  
  test("Uploading files", async ({ page }) => {
    await page.getByText("File Upload").click();
    const fileChoose = page.waitForEvent("filechooser");
    //await page.locator("#file-upload").setInputFiles("./UploadFiles/1000_F_561609331_cmOdHBvlRGhWqPZuB1QBLLlc6nQ1m1eq.jpg");
    await page.locator("#file-upload").click();
    const fileCs = await fileChoose;
    fileCs.setFiles(
      "C:\\UploadFiles\\1000_F_561609331_cmOdHBvlRGhWqPZuB1QBLLlc6nQ1m1eq.jpg"
    );
  });
  
  test("Interacting with Iframe/Frames", async ({ page }) => {
    await page.locator('[href="/frames"]').click();
    await page.locator('[href="/nested_frames"]').click();
    const topFrame = page.frameLocator('[src="/frame_top"]');
    const leftTopFrame = topFrame.frameLocator('[src="/frame_left"]');
    await expect(leftTopFrame.locator("body")).toContainText("LEFT");
    //await page.locator('[href="/iframe"]').click();
    // const frameLocator = page.frameLocator('#mce_0_ifr');
    // await expect(frameLocator.locator('#tinymce p')).toHaveText('Your content goes here.');
  });
  
  test("Uploading multiple files", async ({ page }) => {
    await page.goto(
      "https://www.patternfly.org/components/file-upload/multiple-file-upload/"
    );
    let files: string[] = [
      "C:/UploadFiles/1000_F_561609331_cmOdHBvlRGhWqPZuB1QBLLlc6nQ1m1eq.jpg",
      "C:/UploadFiles/java.png",
    ];
    await uploadFile(
      page,
      "[data-ouia-component-id='OUIA-Generated-Button-secondary-2']",
      files
    );
    expect(
      await page
        .locator(".pf-v6-c-multiple-file-upload__status-item-progress-text")
        .count()
    ).toEqual(2);
  });
  
  async function uploadFile(page: Page, locator: string, files: string[]) {
    const fileChooserPromise = page.waitForEvent("filechooser");
    await page.locator(locator).click();
    const fileChoose = await fileChooserPromise;
    await fileChoose.setFiles(files);
  }
  
  test("Download file test", async ({ page }) => {
    await page.locator('[href="/download"]').click();
    await downloadFile(page, "webdriverIO.png", "./download/");
  });
  
 
})

