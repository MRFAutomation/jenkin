// import data from '../data/login/LoginData';
class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator('#input-email');
        this.password = page.locator('#input-password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage() {
        await this.page.goto(data.loginURL);
    }

    async enterUsername() {
        await this.username.fill(data.loginUser);
    }

    async enterPassword() {
        await this.password.fill(data.loginPswd);
    }

    async clickLoginButton() {
        await Promise.all([
            this.loginButton.click(),
            this.page.waitForLoadState('networkidle'),
        ])
    }

    async loginValidCredentials() {
        await this.enterUsername();
        await this.enterPassword();
        await this.clickLoginButton();
    }
}
module.exports = { LoginPage }