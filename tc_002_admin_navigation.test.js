// tests/tc_002_admin_navigation.test.js
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

const ADMIN_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers';

test('TC_002 - Verify navigation to Admin module', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('Admin', 'admin123');
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page).toHaveURL(ADMIN_URL);
});
