describe('Basic Testing', function() {

    it('Go to the Landing Page', function() {
        cy.visit('http://localhost:9000')
    })

    it('Check the app is Fiori Plaform', function() {
        cy.title().should('eq', 'FAILING TESTS')
    })
    
  })
