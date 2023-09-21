/// <reference types="cypress" />

describe('Login Collection', () => {
    it('login', () => {
        //visit page (url)
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

        cy.get('[value="Login"]').click();
        cy.get('#input-email').type('lambdatestnew@yopmail.com');
        cy.get('#input-password').type('Lambda123', { force: true });

        cy.get('[value="Login"]').click();

        //Assertion
        cy.url().should('include', 'route=account/account');
        //cy.url().should('contain', 'route=account/account');
        cy.contains('My account');

        //subscribe to newsletters
        cy.contains('newsletter').click();
        cy.get('[value="Continue"]').click();

        cy.get('.alert').should(
            'contain',
            'Success: Your newsletter subscription has been successfully updated!'
        );
    });
});