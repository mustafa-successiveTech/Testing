import {test,expect} from '@playwright/test';

test("Verify logout user", async ({page}) => {

    await page.goto('http://automationexercise.com');

    await expect(page.locator('a[href="/products"]')).toBeVisible();

    await page.locator('a[href="/login"]').click();

    await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();

    await page.fill('input[data-qa="login-email"]', "user@test.com");
    await page.fill('input[data-qa="login-password"]', "user");

    await expect(page.locator('h2:has-text("Logged in as user")')).toBeVisible();

    await page.locator('a[href="/logout"]').click();

    await expect(page.locator('h2:has-text("Login to your account')).toBeVisible();

})