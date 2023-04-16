export class Header {
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
  static CheckUrlAcasa() {
    return cy.url().should("contains", "/");
  }

  static CheckUrlTopVoluntari() {
    return cy.url().should("contains", "/search");
  }
  static CheckSearch() {
    return cy.get('input[name="filter"]').should("be.visible");
  }
  static CheckUrlListaNevoi() {
    return cy.url().should("contains", "/needs_list");
  }

  static CheckUrlAbout() {
    return cy.url().should("contains", "/about");
  }
  static CheckTextAbout() {
    return cy.get(".mb-5 h3.card-title").should("have.text", "Despre noi");
  }
  static CheckUrlContact() {
    return cy.url().should("contains", "/contact");
  }

  static CheckTitleForm() {
    return cy.get(".title").should("have.text", "Ofera o sugestie");
  }
  static CheckTitleListaNevoie() {
    return cy
      .get(".top-section > .col-sm-12 > .card > .card-header > .card-title")
      .should("have.text", "Lista nevoi & Cazuri speciale");
  }
  static CheckUrlDevinoVoluntar() {
    return cy.url().should("contains", "/register");
  }
  static CheckTitleFormDevinoVoluntar() {
    return cy.get(".card-header").should("have.text", "Inregistrare");
  }
  static CheckUrlAuthentification() {
    return cy.url().should("contains", "/login");
  }
  static CheckTextAuthentification() {
    return cy.get(".card-header").should("have.text", "Autentificare");
  }
}
