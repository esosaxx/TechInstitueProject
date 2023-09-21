/// <reference types="cypress" />

describe('test practice', () => {
    it('checks url', () => {
// open up a browser 
cy.visit('https://example.cypress.io/commands/actions')
// asserting on url
cy.url().should('contain', 'google.com')
    })
    
})