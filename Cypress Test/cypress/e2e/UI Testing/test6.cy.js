/// <reference types="cypress" />

describe('test practice', () => {
    it('checks the title is correct', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.nava().should('include', 'Product Store')
    })
})