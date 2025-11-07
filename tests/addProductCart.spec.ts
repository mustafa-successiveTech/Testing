import {test, expect, chromium} from '@playwright/test';

test('Test Cases 12: Add products in Cart', async () => {

    const browser = await chromium.launch({ headless: false, slowMo: 2000 });

    const page = await browser.newPage();

    await page.goto('http://automationexercise.com');
    await expect(page.locator('a[href="/products"]')).toBeVisible();

    await page.locator('a[href="/products"]').click();

    const productCount = await page.locator('.features_items .col-sm-4').count();
    expect (productCount).toBeGreaterThan(0);

    const firstProduct = page.locator('.features_items .col-sm-4').first();

    await firstProduct.hover();

    await firstProduct.locator('a:has-text("Add to cart")').first().click();

    await expect(page.locator('.modal-content')).toBeVisible();
    await expect(page.locator('h4:has-text("Added!")')).toBeVisible();

    await page.click('button.close-modal');
})