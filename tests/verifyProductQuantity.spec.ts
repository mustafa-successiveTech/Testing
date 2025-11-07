import {test, expect, chromium} from '@playwright/test';

test("Test case 13: Verify product @quantity", async () => {

     const browser = await chromium.launch({ headless: false, slowMo: 2000 });
     const page = await browser.newPage();

     await page.goto('https://automationexercise.com');

     await expect(page).toHaveURL('https://automationexercise.com');

     await page.click('a[href="/product_details/1"]');

     await expect(page).toHaveURL('https://automationexercise.com/product_details/1');

     const qtyInput = page.locator('#quantity');
     await qtyInput.fill('4');

     await page.click('button.cart');

     await expect(page.locator('.modal-content')).toBeVisible();
     
     await page.locator('u:has-text("View Cart")').click();

     const cartQuantity = await page.locator('.cart_quantity button.disabled').innerText();
     console.log("Cart quantity : ", cartQuantity);
     expect(cartQuantity).toBe('4');

     console.log("Cart quantity verified");
    
})