Cypress.on('uncaught:exception', () => false) //AI
import lidePage from "..//pages/lide/lidePage"
import navigComponent, { NavigationLinks } from "..//pages/components/navig.header.component"

describe('CSOB home page', () => {
  it('loads and shows expected element', () => {
  cy.visit('/') 
    cy.get('header').should('exist')
    cy.cookieConsent();// if we have msg with cookies
    navigComponent.navigateToPage(NavigationLinks.FirmyPodnikatele)
    navigComponent.navigateToPage(NavigationLinks.VelkeFirmy)
    navigComponent.navigateToPage(NavigationLinks.Premium)
    navigComponent.navigateToPage(NavigationLinks.PrivatniBankovstvi)
    navigComponent.navigateToPage(NavigationLinks.Lide)
      
  })
})