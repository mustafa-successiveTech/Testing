import { test, expect } from "@playwright/test";

test("Verify user login with correct email and password",async ({page}) => {

    await page.goto("https://automationexercise.com");

    await expect(page.locator('a[href="/"]', {hasText: 'Home'})).toBeVisible();

    await page.click('a[href="/login"]');

    await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();

    await page.fill('input[data-qa="login-email"]', "johndoe@test.com");

    await page.fill('input[data-qa="login-password"]', "12345");

    await page.click('button[data-qa=login-button]');

    await expect(page.locator('text=Logged in as John Doe')).toBeVisible();

    await page.click('a[href="/delete_account"]');

    await expect(page.locator('b:has-text("Account Deleted!")')).toBeVisible();

})