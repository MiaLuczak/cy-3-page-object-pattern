# <p align="center">GoIT HW 3 </br>Cypress Page Object Pattern</p>

Refractoring tests code from [Cypress Framework](https://github.com/MioLuczak/CypressFramework) repository

### <p align="center">Implementation</p>

- All tests were refractored to use Page Object Pattern
- There's two files in Cypress [pages](./cypress/pages/) folder that corresponds to pages as follows:
  | File | Page |
  | :-: | :-: |
  | [login.js](./cypress/pages/login.js) | Login page |
  | [homePage.js](./cypress/pages/homePage.js) | Home page |

#### [login.js](./cypress/pages/login.js) file creates `Login` class that has these methods:

|         Method         | Purpose                                                                                                           |
| :--------------------: | :---------------------------------------------------------------------------------------------------------------- |
|       `navigate`       | Visits the destinated url address                                                                                 |
|  `validateLoginForm`   | Checks if the login form have: </br> - login and password input fields </br> - 'Log in' button to submit the form |
| `typeLoginCredentials` | Selects one by one every input field and type credentials passed as login and password parameters                 |
|     `loginSubmit`      | Selects the 'Log in' button and then clicks on it                                                                 |

#### [homePage.js](./cypress/pages/homePage.js) file creates `HomePage` class that has these two methods:

|   Method   |                      Purpose                      |
| :--------: | :-----------------------------------------------: |
| `openMenu` | Selects the dropdown menu button and clicks on it |
|  `logout`  | Searches for the 'Logout' button and clicks on it |

### <p align="center">Test execution</p>

|         |          | Tests  |        |         |
| :-----: | :------: | :----: | :----: | :-----: |
| In Spec | Executed | Passed | Failed | Skipped |
|    2    |    2     |   2    |   0    |    0    |

<p align="center">Note:</p>

_Due to login credentials and security, valid login credentials in [loginTestPop.cy.js](./cypress/e2e/loginTestPoP.cy.js) test were changed to invalid ones_ <br>

Screenshot from Cypress (executed tests with passed indication): </br>

![Screenshot from passed tests](./assets/Cypress.png)
