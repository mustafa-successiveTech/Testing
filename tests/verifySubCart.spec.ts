import {test, expect} from '@playwright/test';

test("Test case 11 : To verify Subscription in Cart page", async ({page}) => {

    await page.goto('http://automationexercise.com');

    await expect(page.locator('a[href="/products"]')).toBeVisible();

    await page.click('a[href="/view_cart"]');

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await expect(page.locator('h2:has-text("SUBSCRIPTION")')).toBeVisible();

    await page.fill('#susbscribe_email', 'user' + Date.now() + '@test.com');

    await page.click('#subscribe');

    await expect(page.locator('div.alert-success')).toHaveText(
        'You have been successfully subscribed!'
    )
});