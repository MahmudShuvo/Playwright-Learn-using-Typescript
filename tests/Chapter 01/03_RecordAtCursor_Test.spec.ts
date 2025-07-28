import { test, expect } from '@playwright/test';

test('Search and open a video on YouTube and Record at Cursor Test', async ({ page }) => {
  console.log('🌐 Navigating to YouTube...');
  await page.goto('https://www.youtube.com');

  console.log('🔍 Searching for "Playwright by Testers Talk"...');
  await page.getByPlaceholder('Search').fill('Playwright by Testers Talk');
  await page.keyboard.press('Enter');

  console.log('⏳ Waiting for search results...');
  await page.waitForSelector('ytd-video-renderer');

  console.log('🎯 Clicking the first matching video...');
  await page.getByRole('link', { name: /Playwright TypeScript/i }).first().click();

  // Wait for the video page to load
  await page.waitForLoadState('load');

  // Log the current page URL and title
  const videoUrl = page.url();
  const videoTitle = await page.title();
  console.log('✅ Opened Video URL:', videoUrl);
  console.log('🎬 Video Page Title:', videoTitle);

  await expect(page).toHaveTitle(/Playwright/i);

  //Record at Cursor 
  //Video Validation
  await expect(page.getByRole('link', { name: '▶ #1 Playwright Automation' })).toBeVisible();
  await page.getByRole('link', { name: '2 #2 Advanced Playwright' }).click();

  //Title Validation from Youtube Playlist
  await expect(page.locator('#playlist')).toContainText('#1 Playwright Automation Using TypeScript Full Course 2025 | Playwright TypeScript Beginner Tutorial');
  await expect(page.locator('#playlist')).toContainText('#2 Advanced Playwright TypeScript Tutorial Full Course 2025 | Playwright Automation Tutorial');
});
