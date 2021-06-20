/// <reference types="Cypress" />

context('Menu', () => {
    it('should go to pokedex', () => {
        cy.visit('http://localhost:80/');
        cy.get('#menu > :nth-child(2) > a').click();
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/pokedex');
        });
    });

    it('should go to pokemon list', () => {
        cy.visit('http://localhost:80/');
        cy.get('#menu > :nth-child(3) > a').click();
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/pokemon');
        });
    });

    it('should go to home page', () => {
        cy.visit('http://localhost:80/');
        cy.get('#menu > :nth-child(1) > a').click();
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/');
        });
    });
});