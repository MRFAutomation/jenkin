import { test } from '@playwright/test'
const data = require('../../data/login/LoginData');
const commonData = require('../../data/login/ImportData');
import { Login } from '../../pages/ImportPage';
import { printData, add, subtract } from '../../utils/Imports';

test('Check data import',
    {
        tag: '@import', tag: '@sanity'
    },
    async ({ page }) => {

        await page.goto(data.loginURL);
        await page.waitForLoadState('networkidle')

        const login = new Login(page);
        login.printImportData();

        printData();
        console.log(add(13, 13));
        console.log(subtract(20, 8));

        console.log(commonData.loginData.fileName);
        console.log(commonData.loginData.loginUser);
        console.log(commonData.homeData.street);
        console.log(commonData.cartData.cartItem);

    });
