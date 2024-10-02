const { describe } = require("node:test");

describe('Login Page', () => {
    it('logs in with valid credentials', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[type="email"]').type('gabrieldsilvasantos@gmail.com');
        cy.get('input[type="password"]').type('root123');
        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/dashboard'); 
    });

    it('shows error with invalid credentials', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[type="email"]').type('gabriel.santooos@gmail.com');
        cy.get('input[type="password"]').type('root');
        cy.get('button[type="submit"]').click();

        cy,contains('Falha ao realizar login').should('be.visible');
    });
});