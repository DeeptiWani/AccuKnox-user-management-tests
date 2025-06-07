// tests/tc_004_invalid_login.test.js
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test('TC_004 - Verify login with incorrect credentials', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('Admin', 'admin@123');
  await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');
});
