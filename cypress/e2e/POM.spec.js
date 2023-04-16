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

export class Selectors {
  static Acasa() {
    return cy.get("a").contains(" acasa ");
  }
  static TopVoluntari() {
    return cy.get('a[href*="/search"]');
  }
  static Listanevoi() {
    return cy.get('a[href*="/needs_list"]');
  }
  static About() {
    return cy.get('a[href*="/about"]');
  }
  static Contact() {
    return cy.get('a[href*="/contact"]');
  }
  static Authentification() {
    return cy.get('a[href*="/auth/login"]');
  }
  static DevinoVoluntar() {
    return cy.get('a[href*="/auth/register"]');
  }
  static DismissButton() {
    return cy.get(".dismissButton");
  }
  static Firstname() {
    return cy.get('input[name="contact_first_name"]');
  }
  static LastName() {
    return cy.get('input[name="contact_last_name"]');
  }
  static PhoneNumber() {
    return cy.get('input[name="contact_phone_number"]');
  }
  static Description() {
    return cy.get('textarea[name="description"]');
  }
  static Location() {
    return cy.get('input[placeholder="Nume strada, numar ..."]');
  }
  static Details() {
    return cy.get('input[name="details"]');
  }
  static County() {
    return cy.get('input[name="county"]');
  }
  static City() {
    return cy.get('input[name="city"]');
  }
  static PostalCode() {
    return cy.get('input[name="postal_code"]');
  }
  static Search() {
    return cy.get('input[name="Filter"]');
  }
  static Logut() {
    0;
    return cy.get(":nth-child(9) > .nav-link");
  }
}
