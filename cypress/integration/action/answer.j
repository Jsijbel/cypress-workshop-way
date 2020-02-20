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

When('i select {string} from the car dropdown', () => {
    cy.get('#cars').select('mercedes');
});

When('i focus on the todo textfield', () => {
    cy.get('.todoapp input.new-todo').focus();
});

When('i blur the todo textfield again', () => {
    cy.get('.todoapp input.new-todo').blur();
});
