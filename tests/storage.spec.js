import { test, expect } from '@playwright/test';
import data from '../Data/login-data';
import { MyAccountPage } from '../Pages/my-account';
import util from '../utils/util';

test.describe('Sample Describe Block', () => {

    test('Storage State', async ({ page }) => {

        const assertTextArray = util.getAssertArray();
        const myacc = new MyAccountPage(page);
        // await login.gotoLoginPage();
        // await login.loginValidCredentials();
        await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
        const myAccountElements = page.locator(data.myAccountElementsLocator);
        const count = await myAccountElements.locator('a').count();

        for (let i = 0; i < count; i++) {
            await expect(myAccountElements.locator('a').nth(i)).toContainText(assertTextArray[i]);
        } // for
        await myacc.clickOption('Modify your wish list');
    });

}) // describe

