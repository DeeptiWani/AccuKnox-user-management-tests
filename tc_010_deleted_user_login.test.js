// tests/tc_010_deleted_user_login.test.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('TC_010 - Verify failed login for deleted users', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/web/index.php/auth/login');
  await loginPage.login('dwani', 'dwani@123');
  await expect(loginPage.invalidMessage).toBeVisible();
  await expect(loginPage.invalidMessage).toHaveText('Invalid credentials');
});
