import { test, expect } from '@playwright/test';
import data from '../data/login/LoginData';
import { MyAccountPage } from '../pages/my-account';
import util from '../utils/util';

test('Storage State', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await page.waitForTimeout(3000);
});


