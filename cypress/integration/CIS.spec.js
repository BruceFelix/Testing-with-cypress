/// <reference types="cypress" />

describe('Website Access Test', function () {
    it('Should successfully access the website', function () {

      cy.visit('https://wtt-webapp-stage.vercel.app/')  


      //Login in
      cy.get('#email').type("admin@thoughtandfunction.com")
      cy.get('#password').type("P@ssword1")
      cy.get('.chakra-button').click()

      // close the sidebar
      cy.wait(5000)
      cy.get('.css-1finbeg > .chakra-button').click()

      // Picking the client
      cy.get(':nth-child(5) > .css-1jjfad0' ).click()

      // Create new survey
      cy.wait(5000)
      cy.get('.css-13dzu20 > :nth-child(1) > .chakra-button').click()

      // Filling out survey information
      cy.wait(8000)
      cy.get('#field-\:rr\:').type("Cypress survey")
    })
  })
  
