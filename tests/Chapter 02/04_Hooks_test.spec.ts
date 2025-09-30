import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('This is before all test');
});

test.afterAll(async () => {
  console.log('This is after all test');
});

test('Test 1', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Use stable locator instead of placeholder (language independent)
  await page.locator('textarea[name="q"]').fill('Playwright by Testers Talk');
  await page.keyboard.press('Enter');

//   // Wait for search results to load
//   await page.waitForSelector('h3');

//   // Example: click first result with "Playwright" in the title
//   await page.getByRole('link', { name: /Playwright/i }).first().click();

//   await expect(page).toHaveTitle(/Playwright/i);
});
