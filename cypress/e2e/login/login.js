import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


Given("Login form is opened", () => {
  cy.visit('/');
  cy.get("#header-user-menu").click();
});

When("User inputs phone {string} and password {string} and clicks login", (phone, password) => {
  cy.get("#login-field").type(phone);
  cy.get("#password-field").type(password);
  cy.get(`[name="signin-continue"]`).click();
});

Then("User's name {string} appear at the top right corner of the page", (username) => {
  cy.get("#header-user-menu").should("contain.text", username);
});

Then ("An error {string} should appear", (errorMessage) => {
  cy.get(".alert.alert-5").should('have.text', errorMessage);
});