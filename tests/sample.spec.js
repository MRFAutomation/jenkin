import { test, expect } from '@playwright/test';
const { PageObjects } = require('../pages/po-manager');
const data = require('../data/login/LoginData');
import util from '../utils/util';

test.describe('Sample Describe Block', () => {
    let pom;
    let login;
    let myaccount;
    let assertTextArray;
    let page;
    let context;

    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        pom = new PageObjects(page);
        login = pom.getLoginPage();
        myaccount = pom.getMyAccountPage();
        assertTextArray = util.getAssertArray();
    });


    test('Sample Test One', { tag: '@sanity' }, async () => {
        await page.goto('https://google.com', { waitUntil: 'domcontentloaded' });
    }); // test one

    test('Sample Test Two', { tag: '@sanity' }, async ({ page }) => {
        await page.goto('https://www.youtube.com',
            {
                waitUntil: 'networkidle'
            });
    }); // test two

    test('Sample Test Three', { tag: '@smoke' }, async ({ page }) => {
        await page.goto('https://playwright.dev', { waitUntil: 'domcontentloaded' });
    }); // test three


    test('Systems',
        {
            tag: '@smoke', tag: '@sanity', tag: 'dashboard'
        }, async ({ page }) => {
            await page.goto('https://systemsltd.com/PK',
                {
                    waitUntil: 'networkidle'
                }
            );

            console.log("Pagetitle:", await page.title());
            await page.waitForTimeout(2000);
        });


    test('Sauce_Demo Login', { tag: '@regression' }, async () => {
        await page.goto('https://www.saucedemo.com');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');

        await Promise.all([
            page.waitForURL('https://www.saucedemo.com/inventory.html'),
            page.locator('#login-button').click(),
        ]);

        const items = page.locator('.inventory_item_description');

        await items.locator('button').first().click();

        await expect(items.locator('#remove-sauce-labs-backpack').first()).
            toHaveAttribute('name', 'remove-sauce-labs-backpack')
    });

    test('Ecommerce', { tag: '@simple' }, async ({ page }) => {

        const assertTextArray = [
            'Edit your account information',
            'Change your password',
            'Modify your address book entries',
            'Modify your wish list',
            'Subscribe / unsubscribe to newsletter'
        ];

        await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
        await page.fill('#input-email', 'mrf.testdevice@gmail.com');
        await page.fill('#input-password', 'sXSDaE6xON1LR');
        await Promise.all([
            page.getByRole('button', { name: 'Login' }).click(),
            page.waitForLoadState('networkidle'),
        ])

        const myAccountElements = page.locator("//h2[contains(text(),'My Account')]/parent::div//div[@class='row']");
        const count = await myAccountElements.locator('a').count();

        for (let i = 0; i < count; i++) {
            const accountEleTxt = await myAccountElements.locator('a').nth(i).textContent();
            await expect(myAccountElements.locator('a').nth(i)).toContainText(assertTextArray[i]);
        }

    });

    test('Ecommerce POM', { tag: '@pom' }, async () => {

        await login.gotoLoginPage();
        await login.loginValidCredentials();

        const myAccountElements = page.locator(data.myAccountElementsLocator);
        const count = await myAccountElements.locator('a').count();

        for (let i = 0; i < count; i++) {
            await expect(myAccountElements.locator('a').nth(i)).toContainText(assertTextArray[i]);
        } // for
        await myaccount.clickOption('Modify your wish list');
    });

    test('Test Env', { tag: '@env' }, async () => {
        console.log('Env data:', process.env.URL);
    });

    test('Storage State', { tag: '@storage' }, async ({ page }) => {

        // await login.gotoLoginPage();
        // await login.loginValidCredentials();
        await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
        const myAccountElements = page.locator(data.myAccountElementsLocator);
        const count = await myAccountElements.locator('a').count();

        for (let i = 0; i < count; i++) {
            await expect(myAccountElements.locator('a').nth(i)).toContainText(assertTextArray[i]);
        } // for
        await myaccount.clickOption('Modify your wish list');
    });

}) // describe

