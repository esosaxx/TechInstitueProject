// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import { uiPassword } from "./UI/helper";
import loginPage from '../fixtures/Selectors/loginPage.json'
import homePage from '../../fixtures/Selectors/homePage.json';

// -- This is a parent command --
Cypress.Commands.add('login', (email = 'lambdatestnew@yopmail.com', password = uiPassword) => {
    cy.visit(Cypress.env('url'));

    cy.get(loginPage.loginButton).click();
    cy.get(loginPage.emailField).type(email);
    cy.get(loginPage.passwordField).type(password, {force: true});

    cy.get(loginPage.loginButton).click();
});

Cypress.Commands.add('search', (input = 'Apple') => {
    cy.visit(Cypress.env('url'));

    cy.login;
    cy.get(homePage.searchField).type(input);
    cy.get(homePage.searchButton).click();
});




//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })


//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })