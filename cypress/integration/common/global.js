import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('i am on the todo list page', () => {
    cy.visit('http://localhost:3000');
});
