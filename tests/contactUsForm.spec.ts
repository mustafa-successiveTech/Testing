import {test, expect} from '@playwright/test';

test("Contact Us form",async ({page}) => {

    await page.goto('http://automationexercise.com');

    await expect(page.locator('a[href="/products"]')).toBeVisible();

    await page.locator('a[href="/contact_us"]').click();

    await expect(page.locator('h2:has-text("GET IN TOUCH")')).toBeVisible();

    await page.fill('input[data-qa="name"]', "User");

    await page.fill('input[data-qa="email"]', "user@test.com");

    await page.fill('input[data-qa="subject"]', "Hello from User");

    await page.fill('textarea[data-qa="message"]', "Message from User");

    await page.setInputFiles('input[name="upload_file"]', "tests/test-data/sample.txt");

    await page.locator('input[data-qa="submit-button"]').click();

    page.on("dialog", async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.waitForTimeout(5000);

    const successMsg = page.locator("div.status.alert.alert-success");

    console.log(successMsg.textContent);

    await expect(successMsg).toHaveText(
        "Success! Your details have been submitted successfully.",
        { timeout: 5000 }
    );

    await page.click('a.btn.btn-success[href="/"]');

    await expect(page.locator('a[href="/"]', { hasText: "Home" })).toBeVisible();
});