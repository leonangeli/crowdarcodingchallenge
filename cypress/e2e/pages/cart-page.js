import { should } from "chai"

export default class cartPage {
    clickRemoveBtn() {
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    }

    validateCartPage() {
        cy.contains('Your Cart').should('be.visible')
    }

    validateBackpackAdded() {
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.').should('be.visible')
        cy.contains('29.99').should('be.visible')
    }

    validateEmptyCart() {
        cy.get('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_quantity').contains('1').should('not.be.visible')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.be.visible')
    }
}