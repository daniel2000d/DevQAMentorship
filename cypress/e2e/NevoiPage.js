export class Nevoi {
  static Authentification() {
    return cy.get('a[href*="/auth/login"]');
  }
  static Nevoibtn() {
    return cy.get(":nth-child(2) > .nav-link > p");
  }
  static Viewicon() {
    return cy.get(':nth-child(1) > [aria-colindex="5"] > div > .fa-eye');
  }
  static CheckTitle() {
    return cy.get('h5.title:contains("Vizualizare nevoie")').should("be.visible");
  }
  static Status2() {
    return cy.get(".card-header > p:contains(Status:)").should("be.visible");
  }
  static Titleform() {
    return cy.get("#apply_modal___BV_modal_title_").should("be.visible");
  }
  static Btn() {
    return cy.get(".btn-primary");
  }
  static SelectAllCell() {
    return cy.get("tbody tr td:nth-child(4)");
  }
  static SelectStar() {
    return cy.get("span.vue-star-rating-pointer.vue-star-rating-star");
  }
  static WriteComment() {
    return cy.get('textarea[name="comment"]');
  }
  static Logout() {
    return cy.get(":nth-child(9) > .nav-link");
  }
}
