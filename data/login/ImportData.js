const loginData = {
    fileName: "Login Data",
    loginURL: "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
    loginUser: 'mrf.testdevice@gmail.com',
    loginPswd: "sXSDaE6xON1LR",
    myAccountElementsLocator: "//h2[contains(text(),'My Account')]/parent::div//div[@class='row']",
}

const homeData = {
    homeName: "House 3",
    street: "Milaad Street"
}

const cartData = {
    cartItem: "iPhone 15",
    brand: "Apple"
}

module.exports = {
    loginData,
    homeData,
    cartData
}

