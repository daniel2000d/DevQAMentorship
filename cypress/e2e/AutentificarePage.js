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
export class LogIn {
  static getUsername() {
    return cy.get('input[name="phone_number"]');
  }
  static getPassword() {
    return cy.get('input[name="password"]');
  }
  static Submit() {
    return cy.get(".btn");
  }
}
