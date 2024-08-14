import { test as setup } from '@playwright/test';
import { PageObjects } from '../Pages/po-manager';

setup('Sauce Login', async ({ page }) => {
    await page.goto(process.env.URL);
    await page.fill('#user-name', process.env.USERNAME);
    await page.fill('#password', process.env.PASSWORD);

    await Promise.all([
        page.waitForURL(process.env.WAITURL),
        page.locator('#login-button').click(),
    ]);

    await page.context().storageState({ path: './sauce-auth.json' });
});