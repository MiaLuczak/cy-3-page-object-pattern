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
  typeLoginCredentials(fixtureName) {
    cy.fixture(fixtureName)
      .as(loginCredentials)
      .then(() => {
        // Trying parse JSON fixtures to JS object
        try {
          JSON.parse(loginCredentials);
        } catch {
          // If there's problem with JSON returning invalid loginCredentials object
          return (loginCredentials = {
            login: 'Invalid login Credentials',
            password: '',
          });
        }
      });
    // Getting access to email form textbox, typing and validating login
    cy.get('#user_email').type(loginCredentials.login);
    cy.get('#user_email').should('have.value', loginCredentials.login);
    // Getting access to password form textbox, typing and validating password
    cy.get('#user_password').type(loginCredentials.password);
    cy.get('#user_password').should('have.value', loginCredentials.password);
  }

  // Subbmiting login data, and logging in
  loginSubmit() {
    cy.contains('Log in').click();
  }
}
