import { test, expect } from '@playwright/test';

test('locators in Playwright', async ({ page }) => {
  await test.step('Navigate to URL', async () => {
    // await page.goto('https://github.com/MahmudShuvo');

    //get by role
    //await page.getByRole('link', { name: 'Sign in' }).click();
  
    //get by label
    //await page.getByLabel('Homepage', { exact : true }).first().click();

    //get by alt text
    // await page.getByAltText("View MahmudShuvo's full-sized avatar").click();

    //get by TestID
    // await page.getByTestId("projects").first().click();

    //get by text
    // await page.getByText("Sign Up").click();

    //get by placeholder, xpath, css selector

    // await page.goto('https://www.youtube.com/@testerstalk');
    // // await page.getByPlaceholder('Search').fill('testers talk');
    // // await page.locator('//input[@name="search_query"]').fill('Shuvo'); //xpath
    // await page.locator('input[name="search_query"]').fill('Shuvo'); //css selector

    //get by title
    await page.goto('https://www.google.com/');
    await page.getByTitle('সার্চ করুন').fill('Playwright by Testers Talk');
    
  
  });

});