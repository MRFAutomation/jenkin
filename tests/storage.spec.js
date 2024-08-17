import { test, expect } from '@playwright/test';
import loginData from '../data/login/LoginData';
import { MyAccountPage } from '../pages/my-account';
import util from '../utils/util';

test.describe('Sample Describe Block', () => {

    test('Storage State', async ({ page }) => {

        const assertTextArray = util.getAssertArray();
        const myacc = new MyAccountPage(page);
        // await login.gotoLoginPage();
        // await login.loginValidCredentials();
        await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
        const myAccountElements = page.locator(loginData.myAccountElementsLocator);
        const count = await myAccountElements.locator('a').count();

        for (let i = 0; i < count; i++) {
            await expect(myAccountElements.locator('a').nth(i)).toContainText(assertTextArray[i]);
        } // for
        await myacc.clickOption('Modify your wish list');
    });

}) // describe

