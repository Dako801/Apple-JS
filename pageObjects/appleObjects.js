module.exports = {
    url: 'https://www.apple.com',
    elements: {
        mac: {
            selector: '//*[@id="ac-globalnav"]/div/ul[2]/li[2]/a',
            locateStrategy: 'xpath'
        },
        macbook: {
            selector: '//*[@id="chapternav"]/div/ul/li[3]/a',
            locateStrategy: 'xpath'
        },
        macbook1: {
            selector: '//*[@id="ac-localnav"]/div/div[2]/div[2]/div[2]/div[2]/a',
            locateStrategy: 'xpath'
        },
        selectButton: {
            selector: '(//*[@class="button button-block"])[3]',
            locateStrategy: 'xpath'
        },
        processor: '#processor__dummy_z0uk_065_c5wk_1',
        memory: '#memory__dummy_z0uk_065_c5wp_2',
        addToBag: 'button[name="add-to-cart"]',
        reviewBag: 'button[class="merchandising button"]',
        checkOut: 'button[id="shoppingCart.actions.checkout"]',
        guestCheckout: '#guest-checkout',
        // zipCode: 'div[class="form-element"]',
        // applyZip: 'button[data-autom="checkout-zipcode-apply"]',
        continueToShipping: 'button[data-autom="continue-button-label"]',
        firstName: 'input[id="checkout.shipping.addressSelector.newAddress.address.firstName"]',
        lastName: 'input[id="checkout.shipping.addressSelector.newAddress.address.lastName"]',
        street: 'input[id="checkout.shipping.addressSelector.newAddress.address.street"]',
        email: 'input[id="checkout.shipping.addressContactEmail.address.emailAddress"]',
        phone: 'input[id="checkout.shipping.addressContactPhone.address.fullDaytimePhone"]',
        continueToPayment: 'button[class="button form-button"]',
        reviewButton: 'button[data-autom="continue-button-label"]',

    }
}