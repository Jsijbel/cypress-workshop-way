import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('i am on the random names page', () => {
  cy.visit('https://random-names.netlify.com/')
});

Then('i can see the title {string}', (titleText) => {
    cy.get('h1').contains(titleText);
    cy.get('h1').should('contain', titleText);
});

When('i open the region menu', () => {
  cy.get('[role="button"]').click();
});

Then('the region menu is open', () => {
  cy.get('[role="listbox"]').should('exist').and('be.visible')
});

Then('the region menu contains multiple options', () => {
  cy.get('[role="option"]').should('have.length.of.at.least', 2).each((option) => {
    cy.wrap(option).should('be.visible')
  });
});

When('i choose region {string}', (regionName) => {
  cy.get('[role="option"]').contains(regionName).click()
});

Then('region {string} should be selected', (regionName) => {
  cy.get('input[type="hidden"]').should('have.attr', 'value').should('equal', regionName)
});