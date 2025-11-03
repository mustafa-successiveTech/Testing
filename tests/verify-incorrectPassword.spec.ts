import { test, expect} from '@playwright/test';

test("Verify login with incorrect password", async ({page}) => {

    await page.goto('http://automationexercise.com');

    await expect(page.locator('a[href="/products"]')).toBeVisible();

    await page.locator('a[href="/login"]').click();

    await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();

    await page.fill('input[data-qa="login-email"]', "invalid@test.com");
    await page.fill('input[data-qa="login-password"]', "wrongPassword");

    await page.locator('button[data-qa="login-button"]').click();
    
    await expect(page.locator('p:has-text("Your email or password is incorrect!")')).toBeVisible();
    
})