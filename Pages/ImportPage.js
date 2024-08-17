const data = require('../data/login/LoginData');
const loginData = require('../data/login/ImportData');
import { printData, add, subtract } from '../utils/Imports';

export class Login {
    constructor(page) {
        this.page = page;
    }

    async printImportData() {
        console.log("Inside printImportData");
        console.log(data.loginURL);
        console.log(data.loginUser);
        console.log(data.loginPswd);
        console.log(loginData.loginData.fileName);
        printData();
        console.log(add(10, 20));
        console.log(subtract(20, 10));
    }
}