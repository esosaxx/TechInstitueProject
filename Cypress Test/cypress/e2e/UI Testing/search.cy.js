/// <reference types="cypress" />
import {invalidSearch} from '../../fixtures/searchExamples'

describe('Search collection', () => {
    it('Valid Search', () => {
        cy.search;

        cy.url().should('include', 'search=Apple');
        cy.contains('Search - Apple').should('be.visible');
        cy.get('.product-layout').should('have.length.gt', 0)
    });

    it('Invalid Search Example 1', () => {
        cy.search(invalidSearch.searchOne);

        cy.contains('There is no product that matches the search criteria.').should('be.visible');
    });

    it('Invalid Search Example 2', () => {
        cy.search(invalidSearch.searchTwo);

        cy.contains('There is no product that matches the search criteria.').should('be.visible');
    });
})