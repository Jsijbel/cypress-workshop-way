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

Given('i am on the todo list page', () => {
    cy.visit('http://localhost:3000');
    cy.get('.loading').should('not.be.visible')
});

Given('there is data in the todo app', () => {
    cy.writeFile('todomvc/data.json', {
      "todos": [
        { "title": "Workshop over testen", "completed": false, "id": "0" },
        { "title": "Tests schrijven", "completed": true, "id": "1" },
        { "title": "De todos app testen", "completed": false, "id": "2" }
      ]
    });
});

Given('there is no data in the todo app', () => {
    cy.writeFile('todomvc/data.json', {"todos": []});
});

When('i add a todo with the name {string}', (todoName) => {
    cy.get('.todoapp input.new-todo').type(`${todoName}{enter}`);
});

When('i complete todo with the name {string}', (todoName) => {
    cy.contains('li.todo', todoName).find('input.toggle').check();
});

When('i delete todo with the name {string}', (todoName) => {
    cy.contains('li.todo', todoName).find('button.destroy').click({ force: true });
});

Then('i can see the element selected by Cypress in the gui test results', () => {
    // no actual code here, this is just to show what happens when an element is selected
});

Then('i can see the result in the gui test results', () => {
    // no actual code here, this is just for fun
});

Then('i am super proud', () => {
    // no actual code here, this is just for fun
});
