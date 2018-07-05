describe('p2 testing', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:3000/')
      })
    it('should should have an img', () =>{
        cy.get('img').should('exist')  
    })
    it('should have a header' , () => {
        cy.get('h1').should('exist')
    })
    it('should visit generator page', () => {
        cy.get('a').click()
        cy.url().should('include', 'generator')
    })
   
})