export class Header {
  static Acasa() {
    return cy.get("a");
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
    return cy.url();
  }
  static CheckMap() {
    return cy.get(".d-none");
  }

  static CheckUrlTopVoluntari() {
    return cy.url().should("contains", "/search");
  }
  static CheckSearch() {
    return cy.get('input[name="filter"]');
  }
  static CheckUrlListaNevoi() {
    return cy.url();
  }

  static CheckUrlAbout() {
    return cy.url();
  }
  static CheckTextAbout() {
    return cy.get(".mb-5 h3.card-title");
  }
  static CheckUrlContact() {
    return cy.url();
  }

  static CheckTitleForm() {
    return cy.get(".title");
  }
  static CheckTitleListaNevoie() {
    return cy.get(".top-section > .col-sm-12 > .card > .card-header > .card-title");
  }
  static CheckUrlDevinoVoluntar() {
    return cy.url();
  }
  static CheckTitleFormDevinoVoluntar() {
    return cy.get(".card-header");
  }
  static CheckUrlAuthentification() {
    return cy.url();
  }
  static CheckTextAuthentification() {
    return cy.get(".card-header");
  }
  static SuggestionName() {
    return cy.get('input[name="last_name"]');
  }
  static SuggestionEmail() {
    return cy.get('input[name="email"]');
  }
  static SuggestionDescription() {
    return cy.get('textarea[name="message"]');
  }
  static NextPage() {
    return cy.get(":nth-child(3) > .page-link");
  }
  static RowCheck() {
    return cy.get(".row > :nth-child(3)");
  }
  static BTN() {
    return cy.get(".btn");
  }
}
