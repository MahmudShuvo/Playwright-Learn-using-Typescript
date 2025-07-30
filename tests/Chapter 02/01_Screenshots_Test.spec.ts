import { test, expect } from '@playwright/test';

test('Capture Screenshots in playwright', async ({ page }) => {
  await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY');

  //element screenshot
  await expect(page.locator('#player')).toBeVisible();
  await page.locator('#player').screenshot({ path: './Screenshots/element_screenshot.png' });

  
  //Page ss
  await page.screenshot({ path: './Screenshots/page_screenshot.png' });

  // entire page ss
  await page.screenshot({ path: './Screenshots/entire_page_screenshot.png', fullPage: true });


});
