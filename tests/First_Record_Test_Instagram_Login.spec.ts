import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByRole('textbox', { name: 'Phone number, username, or' }).click();
  await page.getByRole('textbox', { name: 'Phone number, username, or' }).fill('testerstalk445566');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test345678');
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await expect(page.locator('#loginForm')).toContainText('Sorry, your password was incorrect. Please double-check your password.');
});