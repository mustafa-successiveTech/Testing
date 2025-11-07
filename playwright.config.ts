import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
    },
  ],
  reporter: [
    ['list'], // default console output
    ['allure-playwright'], // enable allure reporter
  ],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
