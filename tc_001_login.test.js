// tests/tc_001_login.test.js
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test('TC_001 - Verify successful login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('Admin', 'admin123');
  await expect(page).toHaveURL(/dashboard/);
});
