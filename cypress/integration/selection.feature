Feature: Selecting elements

   As a developer
   I want to select elements with Cypress
   So i can perform actions or assertions on them later

@focus
Scenario: Selecting with get 
Given i am on the todo list page
When the header is selected with cy.get
Then i can see the element selected by Cypress in the gui test results
And i am super proud

Scenario: Selecting with contains
Given i am on the todo list page
When the header is selected with cy.contains
And i can also chain this on a set of elements from get
Then i can see the element selected by Cypress in the gui test results
And i am super proud

Scenario: Selecting certains element with contains
Given i am on the todo list page
When the todo is selected with cy.contains
Then i can see the element selected by Cypress in the gui test results
And i am super proud

Scenario: Selecting descendants with find
Given i am on the todo list page
When i select an input in the descendants of another element
Then i can see the element selected by Cypress in the gui test results
And i am super proud

Scenario: Selecting within a parent with within
Given i am on the todo list page
When i select some elements within a parent
Then i can see the element selected by Cypress in the gui test results
And i am super proud