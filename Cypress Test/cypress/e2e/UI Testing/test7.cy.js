/// <reference types="cypress" />

describe('test practice', () => {
    it('checks email box prints expected email', () => {
        cy.visit('https://www.orangehrm.com/')
        cy.get('[name="action_request"]').type("esosaoghagbon@gmail.com", {force: true})
        //.should('contain', 'esosaoghagbon@gmail.com')
       // cy.get('#Form_submitForm_EmailHomePage').should('have value', 'esosaoghagbon@gmail.com')
    })
})