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
  
When('i add a todo with the name {string}', (todoName) => {
    // type the todo name in the input field
    // and press enter to create the todo
});

When('i complete todo with the name  {string}', (todoName) => {
    // figure out what kind of element and interaction you have to make to complete a todo
    // select element with the todo name
    // complete that item
    cy.contains('li.todo', todoName).check('input.toggle');
});

When('i delete todo with the name {string}', (todoName) => {
    // figure out what kind of element and interaction you have to make to delete a todo
    // select element with the todo name
    // delete that item
    cy.contains('li.todo', todoName).find('button.destroy').click();
});

When('i select {string} from the car dropdown', () => {
    // select the car from the simple dropdown menu below the todo app
});

When('i focus on the todo textfield', () => {
    // focus on the todo textfield
});

When('i blur the todo textfield again', () => {
    // blur(remove focus) the todo textfield
});
