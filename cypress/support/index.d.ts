/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    cookieConsent(): Chainable<void>;
  }
}
