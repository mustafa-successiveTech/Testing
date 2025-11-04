import {test, expect} from '@playwright/test';

test('Case 8: Verify all the products and product detail', async ({page}) => {

    await page.goto('http://automationexercise.com');

    await expect(page.locator('a[href="/products"]')).toBeVisible();

    await page.locator('a[href="/products"]').click();

    await expect(page.locator('h2.title.text-center')).toHaveText("All Products");

    const count = await page.locator('.features_items .col-sm-4').count();

    expect(count).toBeGreaterThan(0);

    await page.click('a[href="/product_details/1"]');

    await expect(page.locator('.product-information')).toBeVisible();
    await expect(page.locator('.product-information h2')).toBeVisible(); 
    await expect(page.locator('.product-information p:has-text("Category:")')).toBeVisible();
    await expect(page.locator('.product-information span span')).toBeVisible();
    await expect(page.locator('.product-information p:has-text("Availability:")')).toBeVisible();
    await expect(page.locator('.product-information p:has-text("Condition:")')).toBeVisible();
    await expect(page.locator('.product-information p:has-text("Brand:")')).toBeVisible();

})