import {test, expect } from '@playwright/test';

test('Case 9 : Verify Search Product page', async ({page}) => {

    await page.goto('http://automationexercise.com');

    await expect(page.locator('a[href="/"]', { hasText : "Home"})).toBeVisible();

    await page.locator('a[href="/products"]').click();

    await expect(page.locator('h2:has-text("ALL PRODUCTS")')).toBeVisible();

    await page.fill('input[name="search"]', "Jeans");

    await page.locator('#submit_search').click();
    
    await expect(page.locator('h2:has-text("SEARCHED PRODUCTS")')).toBeVisible();

    const searchedProducts = await page.locator('.features_items .col-sm-4').count();
    console.log('Number of searched products :', searchedProducts);
    expect(searchedProducts).toBeGreaterThan(0);
})