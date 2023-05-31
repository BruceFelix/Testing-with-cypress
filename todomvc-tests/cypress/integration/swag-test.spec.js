/// <reference types="cypress" />



describe('Swag e-commerce app', () => {

  
  beforeEach(() => {

      cy.visit('https://www.saucedemo.com/') // Replace with the actual URL of the Swag e-commerce app
  
      // Check the title of the page
      cy.title().should('include', 'Swag Labs') // Replace with the expected title of the page
      cy.get('[data-test=username]').type('problem_user');

      cy.get('[data-test=password]').type('secret_sauce');
  
      cy.get('[data-test=login-button]').click();
  // })


  // it('should add product to cart', () => {

    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()

    cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()

    cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click()

    cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click()

    cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()

    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()

  })

  // it('should open cart to checkout goods', () =>{
  //   cy.get('.shopping_cart_link').click()
  // })
})
  

