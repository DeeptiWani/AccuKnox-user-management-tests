// tests/tc_012_duplicate_username.test.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AdminPage } from '../pages/adminPage';

test('TC_012 - Verify duplicate username restriction', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);
  await page.goto('/web/index.php/auth/login');
  await loginPage.login('Admin', 'admin123');
  await adminPage.navigateToAdminModule();
  await adminPage.addUser('dwani', 'dwani@123');
  await expect(page.locator('.oxd-input-group__message')).toContainText('Already exists');
});
