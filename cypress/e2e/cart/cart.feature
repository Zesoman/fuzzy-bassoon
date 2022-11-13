Feature: Cart  

  Scenario: User is able to add item to the cart
    Given User logged in with phone:"0979883723", password:"Qwert!1234", home page opend
    When User open "TUF-RTX4090-O24G-GAMING" item page from search and click Add to cart
    Then Item "TUF-RTX4090-O24G-GAMING" should be added to the cart

  Scenario: User is able to remove item from the cart
    Given User logged in with phone:"0979883723", password:"Qwert!1234", item "TUF-RTX4090-O24G-GAMING" added to the cart
    When User clicks remove button
    Then Item "TUF-RTX4090-O24G-GAMING" should be removed from the cart

  Scenario: User is able to proceed to checkout from the cart
    Given User logged in with phone:"0979883723", password:"Qwert!1234", item "TUF-RTX4090-O24G-GAMING" added to the cart
    When User clicks Proceed to checkout button
    Then Checkout page should open
