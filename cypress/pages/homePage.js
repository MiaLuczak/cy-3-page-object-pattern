export class HomePage {
  openMenu() {
    cy.get('#open-navigation-menu-mobile').click();
  }

  logout() {
    cy.contains('Log out').click();
  }
}
