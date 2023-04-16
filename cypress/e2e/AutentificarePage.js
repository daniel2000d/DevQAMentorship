export class Autentificare {
  static Authentification() {
    return cy.get('a[href*="/auth/login"]');
  }
  static Alert() {
    return cy.get(".alert").should("be.visible");
  }
  static CheckUrlAuthentification() {
    cy.url().should("contains", "login");
  }
}
