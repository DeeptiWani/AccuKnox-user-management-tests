// tests/tc_009_empty_fields_validation.test.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AdminPage } from '../pages/adminPage';

test('TC_009 - Verify error message for empty fields when adding a user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);
  await page.goto('/web/index.php/auth/login');
  await loginPage.login('Admin', 'admin123');
  await adminPage.navigateToAdminModule();
  await adminPage.addUser('', '');
  await expect(adminPage.validationMessages.first()).toBeVisible();
});
