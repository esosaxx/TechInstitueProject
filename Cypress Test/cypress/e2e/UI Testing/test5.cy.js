describe('test practice', () => {
    it('checks url', () => {
// open up a browser 
cy.visit('https://www.demoblaze.com/')
// asserting on url
cy.url().should('contain', 'demo')
    })
    
})