import { Login } from '../pages/login.js';
import { HomePage } from '../pages/homePage.js';

describe('Page object Pattern tests', () => {
  it('Login using gmail domain', () => {
    // Creating new object to access class methods:
    const loginPage = new Login();
    const homePage = new HomePage();

    // Creating object that holds login credentials:
    // Due to Github push login credentials was changed to invalid ones
    const credentials = {
      loginCredential: 'invalidlogincredential',
      passwordCredential: '',
    };

    // Page object Pattern, using methods assigned to login page:
    loginPage.navigate();
    loginPage.validateLoginForm();
    loginPage.typeLoginCredentials(
      credentials.loginCredential,
      credentials.passwordCredential
    );
    loginPage.loginSubmit();

    // Page object Pattern, using methods assigned to home page:
    homePage.openMenu();
    homePage.logout();
  });

  it('Login using qa domain', () => {
    // Creating new object to access class methods:
    const loginPage = new Login();
    const homePage = new HomePage();

    // Creating object that holds login credentials:
    const credentials = {
      loginCredential: 'invalidlogincredential',
      passwordCredential: '',
    };

    // Page object Pattern, using methods assigned to login page:
    loginPage.navigate();
    loginPage.validateLoginForm();
    loginPage.typeLoginCredentials(
      credentials.loginCredential,
      credentials.passwordCredential
    );
    loginPage.loginSubmit();

    // Page object Pattern, using methods assigned to home page:
    homePage.openMenu();
    homePage.logout();
  });
});
