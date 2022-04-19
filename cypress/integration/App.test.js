describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8081/diseases')
    })
  
    it('check if search-box exists', () => {
      cy.get('#search-box').type("multiple");
      cy.contains('Multiple Sclerosis (MS)');
    })
  })
