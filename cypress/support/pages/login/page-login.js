import { ELEMENTS } from "./elements.js";
const elm = ELEMENTS;

class Login {
    acessarPaginaLogin() {
        cy.visit('https://www.saucedemo.com/');
        cy.get(elm.title).should('be.visible');
    }
    realizarLoginComDadosValidos() {
        cy.get(elm.inputUsername).type(Cypress.env('username'));
        cy.get(elm.inputPassword).type(Cypress.env('password'));
        cy.get(elm.btnLogin).click();
        cy.contains('Products').should('be.visible');
    }

    semPreencherCampoUsername() {
        cy.get(elm.inputPassword).type(Cypress.env('password'));
        cy.get(elm.btnLogin).click();
        cy.contains('Username is required').should('be.visible');
    }

    semPreencherCampoPassword() {
        cy.get(elm.inputUsername).type(Cypress.env('username'));
        cy.get(elm.btnLogin).click();
        cy.contains('Password is required').should('be.visible');
    }

    realizarLoginComPasswordIncorreto() {
        cy.get(elm.inputUsername).type(Cypress.env('username'))
        cy.get(elm.inputPassword).type('test');
        cy.get(elm.btnLogin).click();
        cy.contains('Username and password do not match any user in this service').should('be.visible');
    }

    realizarLoginComUsernameIncorreto() {
        cy.get(elm.inputUsername).type('teste')
        cy.get(elm.inputPassword).type(Cypress.env('password'));
        cy.get(elm.btnLogin).click();
        cy.contains('Username and password do not match any user in this service').should('be.visible');
    }
}

export default new Login();