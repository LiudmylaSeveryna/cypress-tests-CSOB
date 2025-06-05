Cypress.on('uncaught:exception', () => false) //AI
import lidePage from "..//pages/lide/lidePage"
import navigComponent, { NavigationLinks } from "..//pages/components/navig.header.component"
import navigLideComponent, { NavigLideLinks } from "..//pages/components/navig.lide.component"
import breadcrumbsExisting, {} from "..//pages/lide/lidePage"
import headerContentExist, {} from "..//pages/lide/lidePage"

describe('CSOB Lide/Ucty page', () => {
  beforeEach(() => {
  cy.visit('/') 
    cy.cookieConsent(); // custom. command, if we have msg with cookies
    navigComponent.navigateToPage(NavigationLinks.Lide)
    navigLideComponent.navigateToPage(NavigLideLinks.Ucty)  
  })

  it('validate of navigation elements', () => {
    headerContentExist.imgCsobLogo().should('be.visible') // logo
    navigLideComponent.lideUctyLink().should('be.visible')
    navigLideComponent.lidePujckyLink().should('be.visible')
    navigLideComponent.lidePojisteniLink().should('be.visible')
    navigLideComponent.lideSporeniLink().should('be.visible')
    navigLideComponent.lideInvesticeLink().should('be.visible')
    navigLideComponent.lideBydleniLink().should('be.visible')
  })

  it('validate of button-label elements', () => {
    navigLideComponent.lideStatKlientem().should('be.visible')
    navigLideComponent.lidePrihlaseni().should('be.visible')
    navigLideComponent.lideSearch().should('be.visible')
  })  

  it('validate of breadcrumbs', () => { 
    breadcrumbsExisting.headerContentExist().should('be.visible')
    breadcrumbsExisting.breadcrumbsExist().should('be.visible')
  }) 

  it('validate of heading ', () => { 
    lidePage.lideHeading().should('be.visible').and('have.text', "Účty a karty")
  })   
  
  it('validate of PlusKonto ', () => {
    lidePage.lideImgPlusKonto().should('be.visible')
    lidePage.lideTextPlusKonto().should('be.visible')
    lidePage.lideTextPlusKontoTitle().should('be.visible').and('have.text', "Plus Konto")
    lidePage.lideTextPlusKontoDescription().should('be.visible').and('contain', "Bankovní účet")
    lidePage.lideTextPlusKontoDescription().should('be.visible')
  }) 
 
})