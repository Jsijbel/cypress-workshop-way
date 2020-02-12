Feature: Workshop

    This feature is all about learning to work with Cypress and Ghurkin/Cucumber

Background: Get on the test subject
    Given i am on the random names page

Scenario: On page
    Then i can see the title "Start Shuffling"

Scenario: Region menu can open
    When i open the region menu
    Then the region menu is open
    And the region menu contains multiple options

Scenario: Region menu can open
    When i open the region menu
    Then the region menu is open
    And the region menu contains multiple options

Scenario Outline: Selecting regions
    When i open the region menu
    And i choose region "<region>"
    Then region "<region>" should be selected

Examples:
| region|
| USA |
| Germany|
| Italy |
| Spain |
| France | 
| Russia |