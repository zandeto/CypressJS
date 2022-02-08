Feature: Products scenarios

    Scenario: Add item to cart
        Given I login to site
        And I add "Sauce Labs Fleece Jacket" to the cart
        When I open the cart
        Then I vefify the item is added to the cart