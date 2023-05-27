export default class inventoryPage{
    validateSuccessfulLogin(){
        cy.title().should('eq', 'Products')
        cy.get('.title').contains('Products').should('exist')
        cy.get('[data-test="product_sort_container"]').should('exist')
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    }

    clickBackpackAddToCartBtn(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }

    clickCartBtn(){
        cy.get('#shopping_cart_container > a').click()
    }
}