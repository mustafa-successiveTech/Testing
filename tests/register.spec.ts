import {test, expect} from '@playwright/test';

test('Register User automation verify', async ({page}) => {

    await page.goto('https://automationexercise.com');

    await expect(page.locator('a[href="/products"]')).toBeVisible();

    await page.click('a[href="/login"]');

    await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();
  
    await page.fill('input[data-qa="signup-name"]', 'John Doe');
    await page.fill('input[data-qa="signup-email"]', 'johndoe' + Date.now() + '@test.com');

    await page.click('button[data-qa="signup-button"]');

    await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();

    await page.check('#id_gender1');
    await page.fill('#password', 'Password123');
    await page.selectOption('#days', '10');
    await page.selectOption('#months', '10');
    await page.selectOption('#years', '2021');

    await page.check('#newsletter');
    await page.check('#optin');

    await page.fill('#first_name', 'John');
    await page.fill('#last_name', 'Doe');
    await page.fill('#company', 'Example Ltd');
    await page.fill('#address1', '123 Noida');
    await page.fill('#address2', 'Noida Apt');
    await page.selectOption('#country', 'India');
    await page.fill('#state', 'Up');
    await page.fill('#city', 'Noida');
    await page.fill('#zipcode', '560001');
    await page.fill('#mobile_number', '9876543210');

    await page.click('button[data-qa="create-account"]');

    await expect(page.locator('h2:has-text("Account Created")')).toBeVisible();

    await page.click('a[data-qa="continue-button"]');

    await expect(page.locator('text=Logged in as John Doe')).toBeVisible();
  
    await page.click('a[href="/delete_account"]');

    await expect(page.locator('b:has-text("Account Deleted!")')).toBeVisible();

    await page.click('a[data-qa="continue-button"]');
})