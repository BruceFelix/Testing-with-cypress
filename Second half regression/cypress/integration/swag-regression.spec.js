describe("Second half regression tests", () =>{
    it("Logs in the Swag lab page and checkouts bought goods",() =>{


        // visit login Swag Lab page
        cy.visit("https://www.saucedemo.com")

        // Login in using the valid username and password
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()

        // buy all the available products.
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()

        // checking them out.
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test=checkout]').click();

        //Entering the firstname
        cy.get('[data-test=firstName]').click();
        cy.get('[data-test=firstName]').type('John');
    
        //Entering the second name
        cy.get('[data-test=lastName]').click();
        cy.get('[data-test=lastName]').type('Constantine');

        //Entering the postalcode
        cy.get('[data-test=postalCode]').click();
        cy.get('[data-test=postalCode]').type('N28AS');

        cy.get('[data-test=continue]').click(); 
        cy.get('[data-test=finish]').click();
    })
})