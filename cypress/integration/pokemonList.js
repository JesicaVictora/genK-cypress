/// <reference types="Cypress" />

context('Pokedex', () => {
    it('should go to pokedex', () => {
        cy.visit('http://localhost:80/pokedex');
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/pokedex');
        });

    
    });

    it('should use the d-pad', () => {
        cy.get('#dpad-right').click();
        cy.get('#dpad-right').click();
        cy.get('#dpad-right').click();
        cy.get('#dpad-left').click();
    });

    it('should search by number', () => {
        cy.get('.pokedex__search__btn__container > :nth-child(2)').click();   
        cy.get('.pokedex__search__btn__container > :nth-child(4)').click(); 
        cy.get('.pokedex__search__btn__container > :nth-child(4)').click();   
        cy.get('.pokedex__search__btn-send').click();
        cy.get('.pokedex__keypad__info-btn').click();
        cy.get('.modal__container').click();
    });
});