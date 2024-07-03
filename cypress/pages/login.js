export class Login {
  // Mavigating to destination page
  navigate() {
    cy.visit('https://www.edu.goit.global/account/login');
  }

  // Validating if the form is valid
  validateLoginForm() {
    cy.get('#user_email').should('be.visible');
    cy.get('#user_password').should('be.visible');
    cy.contains('Log in').should('be.visible');
  }

  // Login method
  typeLoginCredentials(loginCredential, passwordCredential) {
    // Getting access to email form textbox, typing and validating login
    cy.get('#user_email').type(loginCredential);
    cy.get('#user_email').should('have.value', loginCredential);
    // Getting access to password form textbox, typing and validating password
    cy.get('#user_password').type(passwordCredential);
    cy.get('#user_password').should('have.value', passwordCredential);
  }

  // Subbmiting login data, and logging in
  loginSubmit() {
    cy.contains('Log in').click();
  }
}
