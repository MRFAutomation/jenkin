import { test as setup } from '@playwright/test';
import { PageObjects } from '../Pages/po-manager';

setup('Login', async ({ page }) => {
    const po = new PageObjects(page);
    const login = po.getLoginPage();

    await login.gotoLoginPage();
    await login.loginValidCredentials();

    await page.context().storageState({ path: './ecommerce-auth.json' });
});