module.exports = (appleObjects,input) => {
    appleObjects
    .click('@mac')
    .waitForElementPresent('@macbook',5000)
    .click('@macbook')
    .waitForElementPresent('@macbook1',5000)
    .click('@macbook1')
    .waitForElementVisible('@selectButton',5000)
    .click('@selectButton')
    .waitForElementPresent('@processor',5000)
    .click('@processor')
    .waitForElementPresent('@memory',5000)
    .click("@memory")
    .waitForElementPresent('@addToBag',5000)
    .click('@addToBag')
    .waitForElementPresent('@reviewBag',5000)
    .click('@reviewBag')
    .waitForElementPresent('@checkOut',5000)
    .click('@checkOut')
    .waitForElementPresent('@guestCheckout',5000)
    .click('@guestCheckout')
    .waitForElementPresent('@continueToShipping',5000)
    .click('@continueToShipping')
    .waitForElementPresent('@firstName',5000)
    .setValue('@firstName',input.firstName)
    .setValue('@lastName',input.lastName)
    .setValue('@street',input.street)
    // .waitForElementPresent('@email',5000)
    .setValue('@email',input.email)
    .setValue('@phone',input.phone)
    .waitForElementPresent('@continueToPayment',5000)
    .click('@continueToPayment')
 appleObjects
    .expect.element('#rs-checkout-header').to.be.present;


}