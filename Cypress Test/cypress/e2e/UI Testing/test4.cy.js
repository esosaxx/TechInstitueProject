/// <reference types="cypress" />

describe('test practice', () => {
    it('checks Search Tab prints expected text', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#itemc').should('contain', 'Phones')
    })
})