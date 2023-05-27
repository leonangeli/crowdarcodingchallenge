/// <reference types = "cypress" />

describe('Meli API tests', () => {
    it('GET meli apartments', () => {
        cy.request({
            method: 'GET',
            url: 'https://www.mercadolibre.com.ar/menu/departments'
        }).then(), (response) => {
            expect(response.body).have.property('departments')
        }
    });
    
  })