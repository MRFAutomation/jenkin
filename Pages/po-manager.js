import { LoginPage } from '../Pages/login';
import { MyAccountPage } from '../Pages/my-account';
class PageObjects {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.myAccountPage = new MyAccountPage(page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getMyAccountPage() {
        return this.myAccountPage;
    }
}
module.exports = { PageObjects }