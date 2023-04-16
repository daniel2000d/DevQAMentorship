export class Recomandate {
  static Authentification() {
    return cy.get('a[href*="/auth/login"]');
  }
  static NevoiRecomandatebtn() {
    return cy.get(":nth-child(3) > .nav-link > p");
  }
  static Addbtn() {
    return cy.get(".btn");
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
  static selectedoption() {
    return cy.get(".vs__search");
  }
  static Choose() {
    return cy.contains("Alimente");
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
  static submit() {
    return cy.get("form").submit();
  }
  static View() {
    return cy.get('i.fas.fa-eye.view.text-info.action-icon[title="Vizualizeaza"]');
  }
  static ViewText() {
    return cy.get('h5.title:contains("Vizualizare nevoie recomandata")').should("be.visible");
  }
  static Status() {
    return cy.get(".card-header > p:contains(Status:)").should("be.visible");
  }
  static DeleteIcon() {
    return cy.get(".fa-trash-alt");
  }
  static Deletebtn() {
    return cy.get("#delete_modal___BV_modal_footer_ > .btn-primary");
  }
  static Search() {
    return cy.get('input[name="Filter"]');
  }
}
