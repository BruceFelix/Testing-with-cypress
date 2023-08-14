/// <reference types="cypress"/>
import Login from "../support/PageOjects/LoginPage";
import NewParticipantPage from "../support/PageOjects/createclient"
import { Given } from '@badeball/cypress-cucumber-preprocessor';

describe("Valiate login functionality", () => {
  //using pom with feature
 beforeEach("Validate login with valid credentials", () =>{
    cy.viewport(1600, 750)
    cy.visit("taylor-assessment-dev.vercel.app/auth/signin")
    cy.fixture('zrgvariables').then((data) =>{
      const ln = new Login();
      ln.setEmailAddress(data.email)
      ln.setPassword(data.password)
      ln.clickSubmit()
    })
  })
  
  //creatinga new participant
  it.only("Creating a new participant", ()=>{
    cy.wait(6000)
    cy.get('.css-18eeeee').click();//clicking the add participant button
    cy.fixture('zrgvariables').then((data) =>{
      NewParticipantPage.enterFirstName(data.firstName);
      NewParticipantPage.enterLastName(data.lastName);
      NewParticipantPage.enterEmail(data.userEmail);
      cy.get('.css-1btx5z2').click(); //clicking the client option field
      NewParticipantPage.selectOptionByText(  )
      NewParticipantPage.clickSendAssessmentButton();
    })
  })

      it("Creating a new client", () =>{
        cy.get(':nth-child(2) > a > .css-1r5es5d').click()
        cy.get('.css-3jpwsf > .chakra-button').click()
        
        //selector input is not available.
        cy.fixture('companylogo.jpg').then(fileContent => {
          cy.get('.css-1vuu5jg > .chakra-button').attachFile({
            fileContent,
            fileName: 'companylogo.jpg',
            mimeType: 'image/jpeg', // Change the MIME type if your file is of a different type
          });
        });
        cy.get('#field-\\:r3g\\:').type("New Company")
        cy.get('.css-1wfpnbi').click()
      })
})