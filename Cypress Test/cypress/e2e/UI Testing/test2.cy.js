/// <reference types="cypress" />

describe('test practice', () => {
    it('checks Phones button', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#itemc').should('contain', 'Phones')
    })
})