import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'], // default console output
    ['allure-playwright'], // enable allure reporter
  ],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
