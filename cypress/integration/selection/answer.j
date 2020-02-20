import { When } from 'cypress-cucumber-preprocessor/steps';

// For this answer to work we need this background in the feature
// Background: Reset data
// Given there is data in the todo app

When('the header is selected with cy.get', () => {
    cy.get('[data-test=app-title]')
});

When('the header is selected with cy.contains', () => {
    cy.contains('h1', 'todos');
});

When('the todo is selected with cy.contains', () => {
    cy.contains('li.todo', 'todos');
});

When('i can also chain this on a set of elements from get', () => {
    cy.get('h1').contains('todos');
});

When('i select an input in the descendants of another element', () => {
    cy.get('li.todo').find('input');
});

When('i select some elements within a parent', () => {
    cy.get('.within-deeper-example').within(() => {
        cy.get('label').first()
        cy.get('input').first()
    });
});
