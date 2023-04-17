export class Dashboard {
  static ProfileBTN() {
    return cy.get(":nth-child(8) > .nav-link");
  }
  static DescrptionProfile() {
    return cy.get('textarea[name="about-me"]');
  }
  static Save() {
    return cy.get(".btn");
  }
  static AlertProfile() {
    return cy.get(".alert-danger");
  }
  static Testimonials() {
    return cy.get(":nth-child(6) > .nav-link > p");
  }
}
