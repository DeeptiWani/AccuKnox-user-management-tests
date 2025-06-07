// tests/tc_003_create_user.test.js
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import AdminPage from '../pages/adminPage';

test('TC_003 - Verify user creation functionality', async ({ page }) => {
  const login = new LoginPage(page);
  const admin = new AdminPage(page);
  await login.goto();
  await login.login('Admin', 'admin123');
  await admin.navigateToUsers();
  await admin.clickAddUser();
  await admin.createUser({
    userRole: 'ESS',
    employeeName: 'Orange Test',
    status: 'Enabled',
    username: 'dwani',
    password: 'dwani@123'
  });
  await expect(page.locator('div.oxd-toast')).toContainText('Successfully Saved');
});
