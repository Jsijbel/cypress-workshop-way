import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// example Given, When and Then functions
Given('given(precondition) step name', () => {
    // Cypress code to set up precondition
    // i.e.:    -visit web page
    //          -setting up scenario
});
  
When('when(action/user behaviour) step name', () => {
    // Cypress code to perform actions
    // i.e.:    -interacting with elements
    //          -firing events
});
  
Then('then(assertion) step name', () => {
    // Cypress code to assert results
    // i.e.:    -something happens
    //          -correct result is shown
});

// -----Actual steps following this line-----
// ------------------------------------------
  
Given('there is a todo named {string}', (todoName) => {
    addItem(todoName);
});

When('i add todo {string}', (todoName) => {
    addItem(todoName);
});

/**
 * Adds a todo item
 * @param {string} text
 */
const addItem = text => cy.get('.new-todo').type(`${text}{enter}`)

// # Chai documentatie:
// # https://www.chaijs.com/api/bdd/

Then('i can see a new todo with the name {string}', (todoName) => {
    // Get a todo with a certain name
    // Make sure it exists and is visible to the user
    cy.contains('li.todo', todoName)
        .should('exist')
        .and('be.visible')
        .and('not.have.class', 'completed');
});

When('i uncomplete todo with the name {string}', (todoName) => {
    cy.get('.todoapp li.todo').contains('li.todo', todoName).find('input').uncheck();
});

Then('i can see todo with the name {string} is completed', (todoName) => {
    cy.contains('li.todo', todoName)
        .should('have.class', 'completed')
        .find('input')
        .should('be.checked');
});

Then('i can see todo with the name {string} is not completed', (todoName) => {
    cy.contains('li.todo', todoName)
        .should('not.have.class', 'completed')
        .find('input')
        .should('not.be.checked');
});

Then('todo with the name {string} is deleted', (todoName) => {
    cy.get('li.todo').contains(todoName)
        .should('not.exist');
});
