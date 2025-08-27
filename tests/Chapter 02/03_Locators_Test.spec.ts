import { test, expect } from '@playwright/test';

test('locators in Playwright', async ({ page }) => {
  await test.step('Navigate to URL', async () => {
    await page.goto('https://www.instagram.com/');

  });

});