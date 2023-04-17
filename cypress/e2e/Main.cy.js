const functii = require("./functii");
import {Header} from "./HeaderPage";
import {TopVoluntari} from "./TopVoluntaripage";
import {Autentificare} from "./AutentificarePage";
import {Recomandate} from "./NevoiRecomandatePage";
import {Nevoi} from "./NevoiPage";
import {Dashboard} from "./DashboardPage";

describe("Functionalitate ", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("https://iwanttohelp.bim.assistcloud.services");
  });

  // T1
  it("Verify that all header’s elements navigate to the correct page", () => {
    Header.Acasa().contains(" acasa ").click();
    Header.CheckUrlAcasa().should("contains", "/");
    Header.TopVoluntari().click();
    Header.CheckUrlTopVoluntari().should("contains", "/search");
    Header.CheckSearch().should("be.visible");
    Header.Listanevoi().click();
    Header.CheckUrlListaNevoi().should("contains", "/needs_list");
    Header.CheckTitleListaNevoie().should("have.text", "Lista nevoi & Cazuri speciale");
    Header.About().click();
    Header.CheckUrlAbout().should("contains", "/about");
    Header.CheckTextAbout().should("have.text", "Despre noi");
    Header.Contact().click();
    Header.CheckUrlContact().should("contains", "/contact");
    Header.CheckTitleForm().should("have.text", "Ofera o sugestie");
    Header.DevinoVoluntar().click();
    Header.CheckUrlDevinoVoluntar().should("contains", "/register");
    Header.CheckTitleFormDevinoVoluntar().should("have.text", "Inregistrare");
    Header.Authentification().first().click();
    Header.CheckUrlAuthentification().should("contains", "/login");
    Header.CheckTextAuthentification().should("have.text", "Autentificare");
  });

  // T2
  it("Verify that on Top Voluntari page the map and at least one volunteer is displayed.", () => {
    TopVoluntari.TopVoluntari().click();
    Header.CheckMap();
    Header.NextPage().click();
    Header.RowCheck().should("be.visible");
  });

  // T3
  it("Verify the user is able to Zoom in or out the map", () => {
    TopVoluntari.TopVoluntari().click();
    TopVoluntari.DismissButton().click();
    TopVoluntari.Map().click();
    for (let i = 0; i < 3; i++) {
      TopVoluntari.ZoominMap().click();
    }
    for (let i = 0; i < 3; i++) {
      TopVoluntari.ZoomoutMap().click();
    }
  });

  // T4
  it("Verify that Login functionality works with valid credentials", () => {
    Autentificare.Authentification().first().click();
    functii.login("0748087633", "daniel");
    cy.get(".simple-text").should("be.visible");
  });

  // T5
  it("Verify that Login functionality works with invalid credentials", () => {
    Autentificare.Authentification().first().click();
    functii.login("123456789", "@!32");
    Autentificare.Alert();
    Autentificare.CheckUrlAuthentification();
  });

  // T6
  it("Verify that a user is able to add a new Nevoie recomandata", () => {
    Recomandate.Authentification().first().click();
    functii.login("0748087633", "daniel");
    Recomandate.NevoiRecomandatebtn().click();
    Recomandate.Addbtn().click();
    Recomandate.Firstname().type("daniel");
    Recomandate.LastName().type("vieru");
    Recomandate.PhoneNumber().type("0748087633");
    Recomandate.selectedoption().click();
    Recomandate.Choose().click();
    Recomandate.Description().type("descrierea");
    Recomandate.Location().type("unirii");
    Recomandate.Details().type("detalii");
    Recomandate.County().type("Suceava");
    Recomandate.City().type("Suceava");
    Recomandate.PostalCode().type("Suceava");
    Recomandate.submit();
  });

  // T7
  it("Verify that the Descriere field is required ", () => {
    Recomandate.Authentification().first().click();
    functii.login("0748087633", "daniel");
    Recomandate.NevoiRecomandatebtn().click();
    Recomandate.Addbtn().click();
    Recomandate.Firstname().type("daniel");
    Recomandate.LastName().type("vieru");
    Recomandate.PhoneNumber().type("0748087633");
    Recomandate.selectedoption().click();
    Recomandate.Choose().click();
    Recomandate.Location().type("unirii");
    Recomandate.Details().type("detalii");
    Recomandate.County().type("Suceava");
    Recomandate.City().type("Suceava");
    Recomandate.PostalCode().type("Suceava");
    Recomandate.submit();
  });

  // T8
  it("Verify the search functionality", () => {
    Recomandate.Authentification().first().click();
    functii.login("0748087633", "daniel");
    Recomandate.NevoiRecomandatebtn().click();
    Recomandate.View().first().click();
    Recomandate.ViewText();
    Recomandate.Status();
  });

  // T9
  it("Verify that the user is able to use Sterge functionality", () => {
    Recomandate.Authentification().first().click();
    functii.login("0748087633", "daniel");
    Recomandate.NevoiRecomandatebtn().click();
    cy.get("tbody tr td:nth-child(5)").each(($el, index, $list) => {
      const text = $el.text().trim();
      if (text === "Deschis") {
        cy.get(`tbody tr:nth-child(${index + 1}) td:nth-child(6) .fa-trash-alt`).click();
        return false;
      }
    });
    Recomandate.Deletebtn().click();
  });

  // T10
  it("Verify the search functionality", () => {
    Recomandate.Authentification().first().click();
    functii.login("0748087633", "daniel");
    Recomandate.NevoiRecomandatebtn().click();
    Recomandate.Search().type("alex");
    Recomandate.Search().clear();
    Recomandate.Search().type("dadada");
  });

  // T11
  it("Verify that the user is able to use Vizualizeaza functionality", () => {
    Nevoi.Authentification().first().click();
    functii.login("0748087633", "daniel");
    Nevoi.Nevoibtn().click();
    Nevoi.Viewicon().first().click();
    Nevoi.CheckTitle();
    Nevoi.Status2();
  });

  // T12
  it("Verify “Aplica” functionality", () => {
    Nevoi.Authentification().first().click();
    functii.login("0748087633", "daniel");
    Nevoi.Nevoibtn().click();
    cy.get("tbody tr td:nth-child(4)").each(($el, index, $list) => {
      const text = $el.text().trim();
      if (text === "Deschis") {
        cy.get(`tbody tr:nth-child(${index + 1}) td:nth-child(5) .fa-user-check`).click();
        return false;
      }
    });
    Nevoi.Titleform();
    Nevoi.Btn().click();
  });

  // T13
  it("Verify “Completeaza” functionality", () => {
    Nevoi.Authentification().first().click();
    functii.login("0748087633", "daniel");
    Nevoi.Nevoibtn().click();
    Nevoi.SelectAllCell().each(($el, index, $list) => {
      const text = $el.text().trim();
      if (text === "In progres") {
        cy.get(`tbody tr:nth-child(${index + 1}) td:nth-child(5) .fa-check`).click();
        return false;
      }
    });
    Nevoi.SelectStar().first().click();
    Nevoi.WriteComment().type("nota 10");
    Nevoi.Btn().click();
  });

  // T14
  it("Verify that the user is able to properly logout", () => {
    Nevoi.Authentification().first().click();
    functii.login("0748087633", "daniel");
    Nevoi.Logout().click();
    cy.visit("https://iwanttohelp.bim.assistcloud.services");
  });

  //bonus test case
  // TC19
  it("Verify that the user is able to edit his profile", () => {
    Nevoi.Authentification().first().click();
    functii.login("0748087633", "daniel");
    Dashboard.ProfileBTN().click();
    Dashboard.DescrptionProfile().type("dsada");
    Dashboard.Save().click();
    cy.on("window:alert", (message) => {
      expect(message).to.equal("Profilul nu a putut fi actualizat!");
    });
    Dashboard.AlertProfile().should("be.visible");
  });

  // TC18
  it("Request", () => {
    Nevoi.Authentification().first().click();
    functii.login("0748087633", "daniel");
    Dashboard.Testimonials().click();
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      cy.request({
        method: "GET",
        url: "https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/testimonials",
        headers: {Authorization: `Bearer ${token}`},
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  //TC19
  it("Suggestion", () => {
    Header.Contact().click();
    Header.CheckUrlContact().should("contains", "/contact");
    Header.SuggestionName().type("dsadad");
    Header.SuggestionEmail().type("daniel.vieru@student.usv.ro");
    Header.SuggestionDescription().type("dsadsad");
    Header.BTN().click();
  });
});
