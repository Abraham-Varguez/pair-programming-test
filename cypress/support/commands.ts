/// <reference types="cypress" />

//We are creating a cutom Cypress Command this will help us write syntax sugar (cleaner code) when we are creating the test on home.cy.ts
Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})
