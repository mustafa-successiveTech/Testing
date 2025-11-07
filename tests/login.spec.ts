import { test, expect } from "@playwright/test";

test("Register and login user with correct email and password", async ({ page }) => {
  const uniqueEmail = `johndoe${Date.now()}@test.com`;

  await page.goto("https://automationexercise.com");

  // Verify home page
  await expect(page.locator('a[href="/"]', { hasText: "Home" })).toBeVisible();

  // Go to signup page
  await page.click('a[href="/login"]');
  await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();

  // Fill signup form
  await page.fill('input[data-qa="signup-name"]', "John Doe");
  await page.fill('input[data-qa="signup-email"]', uniqueEmail);
  await page.click('button[data-qa="signup-button"]');

  // Complete registration form
  await page.check('#id_gender1');
  await page.fill('#password', "12345");
  await page.selectOption('#days', '5');
  await page.selectOption('#months', '5');
  await page.selectOption('#years', '2000');
  await page.check('#newsletter');
  await page.check('#optin');
  await page.fill('#first_name', "John");
  await page.fill('#last_name', "Doe");
  await page.fill('#address1', "123 Main St");
  await page.selectOption('#country', 'India');
  await page.fill('#state', "Delhi");
  await page.fill('#city', "Delhi");
  await page.fill('#zipcode', "110001");
  await page.fill('#mobile_number', "9999999999");
  await page.click('button[data-qa="create-account"]');

  // Verify account creation
  await expect(page.locator('b:has-text("Account Created!")')).toBeVisible();
  await page.click('a[data-qa="continue-button"]');

  // Verify logged in
  await expect(page.getByText("Logged in as")).toBeVisible();

  // Delete account
  await page.click('a[href="/delete_account"]');
  await expect(page.locator('b:has-text("Account Deleted!")')).toBeVisible();
});
