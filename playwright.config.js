import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: [['html', { open: 'never' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
});
