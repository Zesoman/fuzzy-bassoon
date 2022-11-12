import { When, Then } from "@badeball/cypress-cucumber-preprocessor"

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})