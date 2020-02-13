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
});
  
When('the header is selected with cy.get', () => {
    cy.get('h1');
});

When('the header is selected with cy.contains', () => {
    cy.contains('h1', 'todos');
});

When('i can also chain this on a set of elements from get', () => {
    cy.get('h1').contains('todos');
});
  
Then('i can see the element selected by Cypress in the gui test results', () => {
    // no actual code here, this is just to show what happens when an element is selected
});

Then('i am super proud', () => {
    // no actual code here, this is just for fun
});
