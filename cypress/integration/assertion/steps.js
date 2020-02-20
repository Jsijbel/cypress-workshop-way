import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
  
Given('there is a todo named {string}', (todoName) => {
    // you can use functions it is just js
    addItem(todoName);
});

When('i add todo {string}', (todoName) => {
    // you can use functions it is just js
    addItem(todoName);
});

/**
 * Adds a todo item
 * @param {string} text
 */
const addItem = text => 

// # Chai documentatie:
// # https://www.chaijs.com/api/bdd/

Then('i can see a new todo with the name {string}', (todoName) => {
    // Get a todo with a certain name
    // Make sure it exists and is visible to the user
    // It should also not be completed yet
});

When('i uncomplete todo with the name {string}', (todoName) => {
    // The opposite of completing a todo
});

Then('i can see todo with the name {string} is completed', (todoName) => {
    // Find the todo and check it's class is completed
    // check if the input is checked
});

Then('i can see todo with the name {string} is not completed', (todoName) => {
    // Find the todo and check it's class is not completed
    // check if the input is not checked
});

Then('todo with the name {string} is deleted', (todoName) => {
    // We should not find this todo
});
