Feature: Performing assertions

   As a developer
   I want validate the correct results from actions
   So i know the software we made is high quality

Background: Todo page
Given i am on the todo list page

Scenario: Adding a todo
When i add todo "Eerste vaststellingen uitvoeren"
Then i can see a new todo with the name "Eerste vaststellingen uitvoeren"

Scenario Outline: Adding todo with special characters
Given there is a todo named "<teken>"
Then i can see a new todo with the name "<teken>"

Examples:
| teken  |
| '      |
| //     |
| /*     |

Scenario: Completing a todo
Given there is a todo named "Eerste vaststellingen uitvoeren"
When i complete todo with the name "Eerste vaststellingen uitvoeren"
Then i can see todo with the name "Eerste vaststellingen uitvoeren" is completed

Scenario: Uncompleting a todo
Given there is a todo named "Eerste vaststellingen uitvoeren"
And i complete todo with the name "Eerste vaststellingen uitvoeren"
When i uncomplete todo with the name "Eerste vaststellingen uitvoeren"
Then i can see todo with the name "Eerste vaststellingen uitvoeren" is not completed

Scenario: Deleting a todo
Given there is a todo named "Eerste vaststellingen uitvoeren"
And there is a todo named "Dingen doen"
When i delete todo with the name "Eerste vaststellingen uitvoeren"
Then todo with the name "Eerste vaststellingen uitvoeren" is deleted
But i can see a new todo with the name "Dingen doen"
