// This file contains end-to-end tests for the Fortify Team Builder application.

describe('Fortify Team Builder E2E Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should load the home page', () => {
        cy.get('h1').should('contain', 'Welcome to Fortify Team Builder');
    });

    it('should navigate to the Teams view', () => {
        cy.get('nav').contains('Teams').click();
        cy.url().should('include', '/teams');
        cy.get('h2').should('contain', 'Teams Management');
    });

    it('should add a new team', () => {
        cy.get('nav').contains('Teams').click();
        cy.get('button').contains('Add Team').click();
        cy.get('input[name="teamName"]').type('New Team');
        cy.get('textarea[name="teamDescription"]').type('Description of the new team.');
        cy.get('button').contains('Save').click();
        cy.get('.team-list').should('contain', 'New Team');
    });

    it('should visualize team structures', () => {
        cy.get('nav').contains('Dashboard').click();
        cy.get('.tribe-structure').should('exist');
        cy.get('.squad-structure').should('exist');
    });

    it('should analyze skill gaps', () => {
        cy.get('nav').contains('Skills Analysis').click();
        cy.get('h2').should('contain', 'Skill Gap Analysis');
        cy.get('.skill-gap-chart').should('exist');
    });
});