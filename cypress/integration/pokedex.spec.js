/// <reference types="Cypress" />

context('Pokemon List', () => {
    it('should go to Pokemon List', () => {
        cy.visit('http://localhost:80/pokemon');
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/pokemon');
        });

    
    });

    it('should load more', () => {
        cy.get('#gallery-showmore-btn').click();
        cy.get('#gallery-showmore-btn').click();
    });

    it('should show the info ', () => {
        cy.get('#gallery > :nth-child(6) > .card > img').click();
    });

});