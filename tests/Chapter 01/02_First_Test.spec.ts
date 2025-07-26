import { test, expect } from '@playwright/test';

test('Search and open a video on YouTube', async ({ page }) => {
  await page.goto('https://www.youtube.com');

  await page.getByPlaceholder('Search').fill('Playwright by Testers Talk');
  await page.keyboard.press('Enter');

  // Wait for results to load
  await page.waitForSelector('ytd-video-renderer');

  await page.getByRole('link', { name: /Playwright TypeScript/i }).first().click();

  await expect(page).toHaveTitle(/Playwright/i);
});
