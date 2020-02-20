import { Given, When } from 'cypress-cucumber-preprocessor/steps';

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

// cypress documentation!:  https://docs.cypress.io/api/api/table-of-contents.html

// -----Actual steps following this line-----
// ------------------------------------------

// Tip: Gebruik de documentatie
// https://docs.cypress.io/api/api/table-of-contents.html
  
When('the header is selected with cy.get', () => {
    cy.get('');
});

When('the header is selected with cy.contains', () => {
    cy.contains('todos')
    // Dont mind next line, it's just to confirm your success!
        .should('have.attr', 'data-test', 'app-title');
});

When('the todo is selected with cy.contains', () => {
    cy.contains('.todo', 'todos')
    // Dont mind next line, it's just to confirm your success!
        .should('have.class', 'todo');
});

When('i can also chain contains on a set of elements from get', () => {
    // chain the get command with a contains command to select the h1 containing Dropdown
});

When('i select an input in the descendants of another element', () => {
    // use find to select elements within another element
});


When('i select some elements within a parent', () => {
    // Het is de bedoeling dat het label: Dit is een dieper genest test label
    // en de input: Derde dieper radio
    // geselecteerd zijn
    cy.get('label').first()
    // Dont mind next line, it's just to confirm your success!
        .parent().should('have.class', 'within-deeper-example');
       
    cy.get('input').first()
    // Dont mind next line, it's just to confirm your success!
        .parent().should('have.class', 'within-deeper-example');
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
