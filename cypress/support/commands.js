// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { DOM } from '../../src/lib/constants.js';

Cypress.Commands.add('carNameInput', (nameInput) => {
  cy.get(`#${DOM.CAR_NAME_INPUT_ID}`).type(nameInput);
  return cy.get(`#${DOM.CAR_NAME_BTN_ID}`).click();
});

Cypress.Commands.add('countInput', (countInput) => {
  cy.get(`#${DOM.COUNT_INPUT_ID}`).type(countInput);
  return cy.get(`#${DOM.COUNT_BTN_ID}`).click();
});

Cypress.Commands.add('isStubCalled', (when, stub) => {
  when.then(() => {
    expect(stub).to.be.called;
  });
});

Cypress.Commands.add('isInitialStatus', () => {
  cy.get(`#${DOM.CAR_NAME_INPUT_ID}`).should('not.have.text');
  cy.get(`.${DOM.CAR_PROGRESS_CLASS}`).should('not.exist');
  cy.get(`.${DOM.WINNER_CONTAINER_ID}`).should('not.exist');
  cy.get(`#${DOM.COUNT_INPUT_ID}`).should('not.be.visible');
});
