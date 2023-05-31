describe('shopping flow', function() {
    it('Visits the Login Page, Enters Username and Password, and Submits Form', function () {
        // Visit the login page
        cy.visit('https://www.saucedemo.com')

        // Find the username field by its id and type the username
        cy.get('#user-name').type('standard_user')

        // Find the password field by its id and type the password
        cy.get('#password').type('secret_sauce')

        // Find the login button by its id and click it to submit the form
        cy.get('#login-button').click()

        
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click();
        cy.get('.shopping_cart_badge').click();
        cy.get('[data-test=checkout]').click();
        cy.get('[data-test=firstName]').click();
        cy.get('[data-test=firstName]').type('John');
        cy.get('[data-test=lastName]').click();
        cy.get('[data-test=lastName]').type('Constantine');
        cy.get('[data-test=postalCode]').click();
        cy.get('[data-test=postalCode]').type('N28AS');
        cy.get('[data-test=continue]').click();
        cy.get('[data-test=finish]').click();
    })
})