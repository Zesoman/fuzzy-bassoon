import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("User logged in with phone:{string}, password:{string}, home page opend", (phone, password) => {
  cy.visit('/');
  cy.get("#header-user-menu").click();
  cy.get("#login-field").type(phone);
  cy.get("#password-field").type(password);
  cy.get(`[name="signin-continue"]`).click();
});

When("User open {string} item page from search and click Add to cart", (item) => {
  cy.get("#search-text").type(item);
  cy.contains("strong", item).click();
  cy.get('.btn').click({force: true});
});

Then("Item {string} should be added to the cart", (item) => {
  cy.get(".cart-popup").should('be.visible');
  cy.get(".item__desc").should('contain', item);
  // testing data removal
  cy.get(".del__btn").click();
  cy.get(".del__delete").click();
  cy.get(".empty-cart").should("be.visible");
});

Given("User logged in with phone:{string}, password:{string}, item {string} added to the cart", (phone, password, item) => {
  cy.visit('/');
  cy.get("#header-user-menu").click();
  cy.get("#login-field").type(phone);
  cy.get("#password-field").type(password);
  cy.get(`[name="signin-continue"]`).click();

  cy.get("#search-text").type(item);
  cy.contains("strong", item).click();
  cy.get('.btn').click({force: true});
});

When("User clicks remove button", () => {
  cy.get(".del__btn").click();
  cy.get(".del__delete").click();
});

Then("Item {string} should be removed from the cart", () => {
  cy.get(".empty-cart").should("be.visible");
});

When("User clicks Proceed to checkout button", () => {
  cy.contains(".btn-style6", "Оформити замовлення").click();
});

Then("Checkout page should open", () => {
  cy.url().should("contain", "https://my.can.ua/checkout");
  cy.get("#btn-order").should("contain", "Замовлення підтверджую")
  // testing data removal
  cy.get(".icon2-cart-icon.icon").click();
  cy.get(".item__del.del").click();
  cy.contains(".del__delete", "Видалити з кошику").click({ force: true });
});