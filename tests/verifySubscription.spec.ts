import {test, expect} from '@playwright/test';

test('Case 10 : Verify subscription in Home page', async ({page}) => {

    await page.goto('http://automationexercise.com');

    await expect(page.locator('a[href="/"]', { hasText : 'Home'})).toBeVisible();

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    const subscriptionText = page.locator('h2:has-text("Subscription")');
    await expect(subscriptionText).toBeVisible();

    const email = `test_${Date.now()}@gmail.com`;
    await page.locator('#susbscribe_email').fill(email);
    await page.locator('#subscribe').click();

    const successMsg = page.locator('div.alert-success');
    await expect(successMsg).toHaveText('You have been successfully subscribed!');
})