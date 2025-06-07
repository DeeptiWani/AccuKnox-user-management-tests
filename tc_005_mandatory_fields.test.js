// tests/tc_005_mandatory_fields.test.js
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import AdminPage from '../pages/adminPage';

test('TC_005 - Verify mandatory field validation during user creation', async ({ page }) => {
  const login = new LoginPage(page);
  const admin = new AdminPage(page);
  await login.goto();
  await login.login('Admin', 'admin123');
  await admin.navigateToUsers();
  await admin.clickAddUser();
  await admin.saveUser();
  const errors = await page.locator('.oxd-input-group .oxd-text--error').allTextContents();
  expect(errors.length).toBeGreaterThan(0);
});
