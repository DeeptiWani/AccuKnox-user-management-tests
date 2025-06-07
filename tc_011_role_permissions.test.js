// tests/tc_011_role_permissions.test.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

// Simulating permission restriction check

test('TC_011 - Verify role-based access permissions', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/web/index.php/auth/login');
  await loginPage.login('dwani', 'dwani@123');
  await expect(page.locator('a:has-text("Admin")')).toHaveCount(0);
});

