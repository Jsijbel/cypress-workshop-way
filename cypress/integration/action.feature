Feature: Performing actions on selected elements

   As a developer
   I want to perform actions on elements with Cypress
   So i can mimic user behaviour and assert the correct outcome later

Scenario: typing
Given i am on the todo list page
When i add a todo with the name "Eerste acties uitvoeren"
Then i can see the result in the gui test results
And i am super proud

Scenario: checking
Given i am on the todo list page
When i complete todo with the name "Eerste acties uitvoeren"
Then i can see the result in the gui test results
And i am super proud

Scenario: clicking
Given i am on the todo list page
When i delete todo with the name "Eerste acties uitvoeren"
Then i can see the result in the gui test results
And i am super proud

Scenario: selecting
Given i am on the todo list page
When i select "Mercedes" from the car dropdown
Then i can see the result in the gui test results
And i am super proud

Scenario: focussing
Given i am on the todo list page
When i focus on the todo textfield
And i blur the todo textfield again
Then i can see the result in the gui test results
And i am super proud
