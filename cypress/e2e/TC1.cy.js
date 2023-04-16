const functii = require("./functii");
import {LogIn, Selectors} from "../e2e/POM.spec";
import {Header} from "../e2e/HeaderPage";
import {TopVoluntari} from "../e2e/TopVoluntaripage";
import {Autentificare} from "../e2e/AutentificarePage";
import {Recomandate} from "../e2e/NevoiRecomandatePage";
import {Nevoi} from "../e2e/NevoiPage";

describe("Functionalitate ", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("https://iwanttohelp.bim.assistcloud.services");
  });

  /// T1
  it("Verify that all header’s elements navigate to the correct page", () => {
    Header.Acasa().click();
    Header.CheckUrlAcasa();

    Header.TopVoluntari().click();
    Header.CheckUrlTopVoluntari();

    Header.CheckSearch();

    Header.Listanevoi().click();
    Header.CheckUrlListaNevoi();
    Header.CheckTitleListaNevoie();

    Header.About().click();
    Header.CheckUrlAbout();
    Header.CheckTextAbout();

    Header.Contact().click();
    Header.CheckUrlContact();
    Header.CheckTitleForm();

    Header.DevinoVoluntar().click();
    Header.CheckUrlDevinoVoluntar();
    Header.CheckTitleFormDevinoVoluntar();

    Header.Authentification().first().click();
    Header.CheckUrlAuthentification();
    Header.CheckTextAuthentification();
  });
  ////t2
  it("Verify that on Top Voluntari page the map and at least one volunteer is displayed.", () => {
    TopVoluntari.TopVoluntari().click();
    cy.get(".d-none").should("be.visible");
    cy.get(":nth-child(3) > .page-link").click();
    cy.get(".row > :nth-child(3)").should("be.visible");
  });
  ///t3

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
  ///t4
  it("Verify that Login functionality works with valid credentials", () => {
    Autentificare.Authentification().first().click();
    functii.login("0748087633", "daniel");
    cy.get(".simple-text").should("be.visible");
  });
  //t5
  it("Verify that Login functionality works with invalid credentials", () => {
    Autentificare.Authentification().first().click();
    functii.login("123456789", "@!32");

    Autentificare.Alert();
    Autentificare.CheckUrlAuthentification();
  });
  ////t6
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
  ///t7
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
  ////t8

  it("Verify the search functionality", () => {
    cy.wait(3000);
    Recomandate.Authentification().first().click();

    functii.login("0748087633", "daniel");
    Recomandate.NevoiRecomandatebtn().click();
    Recomandate.View().first().click();
    Recomandate.ViewText();
    Recomandate.Status();
  });
  ////t9
  it("Verify that the user is able to use Sterge functionality", () => {
    Recomandate.Authentification().first().click();
    functii.login("0748087633", "daniel");
    Recomandate.NevoiRecomandatebtn().click();
    Recomandate.DeleteIcon().first().click();
    Recomandate.Deletebtn().click();
  });
  ////t10
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
    cy.wait(3000);
    Nevoi.Authentification().first().click();

    functii.login("0748087633", "daniel");
    Nevoi.Nevoibtn().click();
    Nevoi.Viewicon().first().click();
    Nevoi.CheckTitle();
    Nevoi.Status2();
  });

  //T12

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

  //T13
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
  //T14
  it("Verify that the user is able to properly logout", () => {
    Nevoi.Authentification().first().click();

    functii.login("0748087633", "daniel");
    Nevoi.Logout().click();
    cy.visit("https://iwanttohelp.bim.assistcloud.services");
  });
});
