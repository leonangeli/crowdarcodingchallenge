export default class loginPage {
    naviagte(){
        cy.visit('http://saucedemo.com/')
    }

    setUsername(username){
        cy.get('[data-test="username"]').type(username)
    }

    setPassword(password){
        cy.get('[data-test="username"]').type(password)
    }

    clickLoginBtn(){
        cy.get('[data-test="login-button"]').click()
    }

    validateLockedOutUser(){
        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
        cy.get('#login_button_container > div > form > div:nth-child(2) > svg').should('be.visible');
    }


}