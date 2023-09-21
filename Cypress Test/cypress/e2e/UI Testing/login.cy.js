/// <reference types="cypress" />

import { invalidUser, validUser } from "../../fixtures/loginUsers";


describe('login collection', () => {
    it('valid login', () => {
        // visit page url
        cy.login();
        
        //Assertion
        cy.url().should('include', 'route=account/account');
        cy.contains('My account');

        //subscribe to newsletters
        cy.contains('newsletter').click()
        cy.get('.float-right > .btn').click();

        //Assertion
        cy.get('.alert').should(
           'contain',
            'Success: Your newsletter subscription has been successfully updated!'
        );
    });

    it('Invalid login email', () => {
        //visit page (url)

        cy.login(invalidUser.email, invalidUser.password);

        //Assertion
        cy.url().should('include', 'route=account/login');
        //cy.url().should('contain', 'route=account/account');
        cy.get('#account-login > .alert').should(
            'contain',
            'Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.'
        );
    });
    
});