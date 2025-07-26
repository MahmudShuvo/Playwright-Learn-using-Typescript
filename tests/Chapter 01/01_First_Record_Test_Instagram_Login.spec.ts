import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step('Navigate to URL', async () => {
    await page.goto('https://www.instagram.com/');

  });

  await test.step('Enter Username and Password', async () => {

    await page.getByRole('textbox', { name: 'Phone number, username, or' }).click();
    await page.getByRole('textbox', { name: 'Phone number, username, or' }).fill('testerstalk445566');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('test345678');

  });
  await test.step('Click on Login Button', async () => {
    await page.getByRole('button', { name: 'Log in', exact: true }).click();

  });
  await test.step('Validate the Error Message', async () => {
    await expect(page.locator('#loginForm')).toContainText('Sorry, your password was incorrect. Please double-check your password.');
  });
});