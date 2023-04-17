const functii = require("./functii");

describe("Testarea endpointului de profil", () => {
  //Tc15

  it("Test Get profile endpoint", () => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/auth/login");
    functii.login("0748087633", "daniel");
    cy.location("pathname").should("eq", "/dashboard");
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      cy.request({
        method: "GET",
        url: "https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/profile",
        headers: {Authorization: `Bearer ${token}`},
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.profile.id).to.eq(13);
        expect(response.body.profile.first_name).to.eq("daniel");
        expect(response.body.profile.last_name).to.eq("vieru");
        expect(response.body.profile.role).to.eq("volunteer");
        expect(response.body.profile.address.id).to.eq(48);
        expect(response.body.profile.address.street_name).to.eq("voievodului");
        expect(response.body.profile.address.city).to.eq("suceava");
        expect(response.body.profile.address.county).to.eq("suceava");
        expect(response.body.profile.address.postal_code).to.eq("720123");
        expect(response.body.profile.address.details).to.eq("15");
        expect(response.body.profile.phone_number).to.eq("0748087633");
        expect(response.body.profile.email).to.eq("daniel.vieru@student.usv.ro");
        expect(response.body.profile.questionnaire_completed).to.eq(true);
        expect(response.body.profile.trusted_volunteer).to.eq(true);
      });
    });
  });

  //TC16
  it("Test Get all recommended needs endpoint", () => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/auth/login");
    functii.login("0748087633", "daniel");
    cy.location("pathname").should("eq", "/dashboard");
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      cy.request({
        method: "GET",
        url: "https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/profile",
        headers: {Authorization: `Bearer ${token}`},
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  //Tc17
  it("API testing create need", () => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/auth/login");
    functii.login("0748087633", "daniel");
    cy.location("pathname").should("eq", "/dashboard");
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      cy.request({
        method: "POST",
        url: "https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: {
          contact_first_name: "sdadad",
          contact_last_name: "adsada",
          contact_phone_number: "232323",
          category: "drugs",
          description: "dsada",
          address: {
            street_name: "da22",
            details: "dada",
            county: "dad",
            city: "adada",
            postal_code: "3343",
          },
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.exist;
      });
    });
  });

  //Tc17
  it("API testing get need", () => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/auth/login");
    functii.login("0748087633", "daniel");
    cy.location("pathname").should("eq", "/dashboard");
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      cy.request({
        method: "GET",
        url: "https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/needs",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        const needId = response.body.needs[0].id;
        cy.request({
          method: "GET",
          url: `https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/needs/${needId}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.need.id).to.eq(needId);
        });
      });
    });
  });

  // TC17 dupa Delete
  it("API testing delete need", () => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/auth/login");
    functii.login("0748087633", "daniel");
    cy.location("pathname").should("eq", "/dashboard");
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      cy.request({
        method: "GET",
        url: "https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        let needIdToDelete = null;
        const needs = response.body.needs;
        for (let i = 0; i < needs.length; i++) {
          if (needs[i].status === "opened") {
            needIdToDelete = needs[i].id;
            break;
          }
        }
        if (!needIdToDelete) {
          throw new Error("Nu există nicio nevoie deschisă de șters!");
        }
        cy.request({
          method: "DELETE",
          url: `https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs/${needIdToDelete}`,
          headers: {Authorization: `Bearer ${token}`},
        }).then((response) => {
          expect(response.status).to.eq(204);
          expect(response.body).to.exist;
        });
      });
    });
  });
});
