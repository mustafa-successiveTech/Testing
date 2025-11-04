import {test, expect} from '@playwright/test';

test("Test Case 7: Verify Test Cases Page Navigation", async ({ page }) => {

  await page.goto("https://automationexercise.com");

  await expect(page.locator('a[href="/"]', { hasText: "Home" })).toBeVisible();

  await page.click('a[href="/test_cases"]');

  await expect(page).toHaveURL(/.*test_cases/);
  await expect(page.locator("h2.title.text-center")).toHaveText("Test Cases");

  console.log("✅ User navigated to Test Cases page successfully");
});
