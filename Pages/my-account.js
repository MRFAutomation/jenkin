import data from '../data/login/LoginData';

class MyAccountPage {
    constructor(page) {
        this.page = page;
        this.myAccountElements = page.locator(data.myAccountElementsLocator);
    }

    async clickOption(option) {

        const count = await this.myAccountElements.locator('a').count();

        for (let i = 0; i < count; i++) {
            const text = await this.myAccountElements.locator('a').nth(i).textContent();
            if (text.includes(option)) {
                await this.myAccountElements.locator('a').nth(i).click();
                break;
            } // if
        } // for
        await this.page.waitForLoadState('networkidle');
    } // click option function
}
module.exports = { MyAccountPage }