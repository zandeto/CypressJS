Feature: Login to Sause Labs

    Scenario: Login with Valid User
        Given I open login page
        When I enter credentials and press login button
        Then I should see the products page