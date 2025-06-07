// tests/tc_007_search_user.test.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AdminPage } from '../pages/adminPage';

test('TC_007 - Verify user search functionality', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);
  await page.goto('/web/index.php/auth/login');
  await loginPage.login('Admin', 'admin123');
  await adminPage.navigateToAdminModule();
  await adminPage.searchUser('dwani');
  await expect(page.locator('div.oxd-table-cell')).toContainText('dwani');
});

