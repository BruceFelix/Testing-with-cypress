class Login{
    
    emailAddress = '[data-cy="email"]'
    password = '[data-cy="password"]'
    click ='[data-cy="submit"]'


    setEmailAddress(email){
        cy.get(this.emailAddress).type(email);
    }
    setPassword(password){
        cy.get(this.password).type(password);
    }
    clickSubmit(){
        cy.get(this.click).click();
    }
}

export default Login;