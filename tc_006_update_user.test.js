// tests/tc_006_update_user.test.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AdminPage } from '../pages/adminPage';

test('TC_006 - Verify user details update functionality', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);
  await page.goto('/web/index.php/auth/login');
  await loginPage.login('Admin', 'admin123');
  await adminPage.navigateToAdminModule();
  await adminPage.searchUser('dwani');
  await adminPage.updateUser('dwaniUpdated');
  await adminPage.searchUser('dwaniUpdated');
  await expect(page.locator('div.oxd-table-cell')).toContainText('dwaniUpdated');
});
