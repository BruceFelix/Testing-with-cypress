// NewParticipantPage.js
class NewParticipantPage {
    // Locators
    get firstNameInput() {
      return cy.get('#field-\\:r6e\\:');
    }
  
    get lastNameInput() {
      return cy.get('#field-\\:r6f\\:');
    }
  
    get emailInput() {
      return cy.get('#field-\\:r6g\\:');
    }
  
    get sendAssesment() {
      return cy.get('.css-dic39g');
    }

    // Methods
    enterFirstName(firstName) {
      this.firstNameInput.type(firstName);
    }
  
    enterLastName(lastName) {
      this.lastNameInput.type(lastName);
    }
  
    enterEmail(email) {
      this.emailInput.type(email);
    }
  
    selectOptionByText() {
      cy.get('#react-select-2-option-1').click();
    }
  
    clickSendAssessmentButton() {
      this.sendAssesment.click();
    }
  }
  
  export default new NewParticipantPage();
  