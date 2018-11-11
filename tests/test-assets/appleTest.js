var apple = ''
var addToCart = require('./addToCart')
var testData = require('./testData')
module.exports = {
    beforeEach: browser => {
        apple = browser.page.appleObjects()
        apple.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Macbook': browser => {
        testData.checkout.forEach(test => {
            addToCart(apple, test)
        });
    },

}