/// <reference types = "cypress" />

import inventoryPage from "../pages/inventory-page"
import loginPage from "../pages/login-page"


describe('Login tests', () => {
  const ln = new loginPage()
  const i = new inventoryPage()
  beforeEach(() => {
    ln.naviagte()
  })

  it('Login successfuly', () => {
    ln.setUsername('standard_user')
    ln.setPassword('secret_sauce')
    ln.clickLoginBtn()
    i.validateSuccessfulLogin()
  })

  it('Locked out user validation', () => {
    ln.setUsername('locked_out_user')
    ln.setPassword('secret_sauce')
    ln.clickLoginBtn()
    ln.validateLockedOutUser()
  })
})