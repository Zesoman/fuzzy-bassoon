Feature: Login

  Scenario: Successful Login
    Given Login form is opened
    When User inputs phone "0979883723" and password "Qwert!1234" and clicks login
    Then User's name "Awsome Tester" appear at the top right corner of the page

  Scenario: Login with unvalid phone
    Given Login form is opened
    When User inputs phone "0449883723" and password "Qwert!1234" and clicks login
    Then An error "Ви зазначили не валідний телефон" should appear