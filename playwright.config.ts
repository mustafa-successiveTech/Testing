import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',         
  timeout: 30 * 1000,         
  reporter: [
    ['list'],                  
    ['allure-playwright']     
  ],
  use: {
    headless: true,            
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
