describe("Functionalitate ", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("https://iwanttohelp.bim.assistcloud.services");
  });

  /// T1
  it("Verify that all header’s elements navigate to the correct page", () => {
    cy.get("a").contains(" acasa ").click();
    cy.url().should("contains", "/");

    cy.get('a[href*="/search"]').click();
    cy.url().should("contains", "/search");
    cy.get('input[name="filter"]').should("be.visible");

    cy.get('a[href*="/needs_list"]').click();
    cy.url().should("contains", "/needs_list");
    cy.get(".top-section > .col-sm-12 > .card > .card-header > .card-title").should(
      "have.text",
      "Lista nevoi & Cazuri speciale"
    );

    cy.get('a[href*="/about"]').click();
    cy.url().should("contains", "/about");
    cy.get(".mb-5 h3.card-title").should("have.text", "Despre noi");

    cy.get('a[href*="/contact"]').click();
    cy.url().should("contains", "/contact");
    cy.get(".title").should("have.text", "Ofera o sugestie");

    cy.get('a[href*="/auth/register"]').click();
    cy.url().should("contains", "/register");
    cy.get(".card-header").should("have.text", "Inregistrare");

    cy.get('a[href*="/auth/login"]').first().click();
    cy.url().should("contains", "/login");
    cy.get(".card-header").should("have.text", "Autentificare");
  });

  it("Verify that on Top Voluntari page the map and at least one volunteer is displayed.", () => {
    cy.get('a[href*="/search"]').click();
    cy.get(".d-none").should("be.visible");
    cy.get(":nth-child(3) > .page-link").click();
    cy.get(".row > :nth-child(3)").should("be.visible");
  });

  it("Verify the user is able to Zoom in or out the map", () => {
    cy.get('a[href*="/search"]').click();
    cy.get(".dismissButton").click();
    cy.get(":nth-child(9) > .gm-control-active").click();
    for (let i = 0; i < 3; i++) {
      cy.get('[aria-label="Zoom in"]').click();
    }
    for (let i = 0; i < 3; i++) {
      cy.get('[aria-label="Zoom out"]').click();
    }
  });

  it("Verify that Login functionality works with valid credentials", () => {
    cy.get('a[href*="/auth/login"]').first().click();
    cy.get('input[name="phone_number"]').type("0748087633");
    cy.get('input[name="password"]').type("daniel");
    cy.get(".btn").click();
    cy.get(".simple-text").should("be.visible");
  });

  it("Verify that Login functionality works with invalid credentials", () => {
    cy.get('a[href*="/auth/login"]').first().click();
    cy.get('input[name="phone_number"]').type("123456789");
    cy.get('input[name="password"]').type("@!32");
    cy.get(".btn").click();

    cy.get(".alert").should("be.visible");
    cy.url().should("contains", "login");
  });

  it("Verify that a user is able to add a new Nevoie recomandata", () => {
    cy.get('a[href*="/auth/login"]').first().click();
    cy.get('input[name="phone_number"]').type("0748087633");
    cy.get('input[name="password"]').type("daniel");
    cy.get(".btn").click();
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.get(".btn").click();
    cy.get('input[name="contact_first_name"]').type("daniel");
    cy.get('input[name="contact_last_name"]').type("vieru");
    cy.get('input[name="contact_phone_number"]').type("0748087633");

    cy.get(".vs__search").click();
    cy.contains("Alimente").click();
    cy.get('textarea[name="description"]').type("descriere");
    cy.get('input[placeholder="Nume strada, numar ..."]').type("unirii");
    cy.get('input[name="details"]').type("detalii");
    cy.get('input[name="county"]').type("Suceava");
    cy.get('input[name="city"]').type("Suceava");
    cy.get('input[name="postal_code"]').type("Suceava");
    cy.get("form").submit();
  });

  it("Verify that the Descriere field is required ", () => {
    cy.get('a[href*="/auth/login"]').first().click();
    cy.get('input[name="phone_number"]').type("0748087633");
    cy.get('input[name="password"]').type("daniel");
    cy.get(".btn").click();
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.get(".btn").click();
    cy.get('input[name="contact_first_name"]').type("daniel");
    cy.get('input[name="contact_last_name"]').type("vieru");
    cy.get('input[name="contact_phone_number"]').type("0748087633");

    cy.get(".vs__search").click();
    cy.contains("Alimente").click();
    cy.get('input[placeholder="Nume strada, numar ..."]').type("unirii");
    cy.get('input[name="details"]').type("detalii");
    cy.get('input[name="county"]').type("Suceava");
    cy.get('input[name="city"]').type("Suceava");
    cy.get('input[name="postal_code"]').type("Suceava");
    cy.get("form").submit();
  });

  it("Verify that the user is able to use Vizualizeaza  functionality ", () => {
    cy.get('a[href*="/auth/login"]').first().click();
    cy.get('input[name="phone_number"]').type("0748087633");
    cy.get('input[name="password"]').type("daniel");
    cy.get(".btn").click();
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.get(".fa-eye").click();

    cy.get(".card-header").contains("h5.card-title", "Vizualizare nevoie");
  });

  it("Verify that the user is able to use Sterge functionality", () => {
    cy.get('a[href*="/auth/login"]').first().click();
    cy.get('input[name="phone_number"]').type("0748087633");
    cy.get('input[name="password"]').type("daniel");
    cy.get(".btn").click();
    cy.get(":nth-child(2) > .nav-link > p").click();
  });
});
