/// <reference types = "cypress" />

import cartPage from "../pages/cart-page"
import inventoryPage from "../pages/inventory-page"
import loginPage from "../pages/login-page"


describe('Login tests', () => {
    const ln = new loginPage()
    const c = new cartPage()
    const i = new inventoryPage()
    beforeEach(() => {
      ln.naviagte()
    })

    it('Add a single product', () => {
      ln.setUsername('standard_user')
      ln.setPassword('secret_sauce')
      ln.clickLoginBtn()
      i.validateSuccessfulLogin()
      i.clickBackpackAddToCartBtn()
      i.clickCartBtn()
      c.validateBackpackAdded()
      
    })
  
    it('Remove a single product', () => {
        ln.setUsername('standard_user')
        ln.setPassword('secret_sauce')
        ln.clickLoginBtn()
        i.validateSuccessfulLogin()
        i.clickBackpackAddToCartBtn()
        i.clickCartBtn()
        c.validateBackpackAdded()
        c.clickRemoveBtn()
        c.validateEmptyCart()
    })
  })