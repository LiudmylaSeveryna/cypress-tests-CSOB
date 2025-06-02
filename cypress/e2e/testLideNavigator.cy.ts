Cypress.on('uncaught:exception', () => false) //AI
import lidePage from "..//pages/lide/lidePage"
import navigLideComponent, { NavigLideLinks } from "..//pages/components/navig.lide.component"

describe('CSOB home page', () => { 
  beforeEach(() => {
   cy.visit('/') 
   //cy.get('header').should('exist')
   lidePage.cookieConsent() // if we have msg with cookies
    })
    it('loads and shows expected element', () => {
      navigLideComponent.navigateToPage(NavigLideLinks.Ucty)
    })

    it('loads and shows expected element', () => { 
      navigLideComponent.navigateToPage(NavigLideLinks.Pujcky) 
    })

    it('loads and shows expected element', () => { 
      navigLideComponent.navigateToPage(NavigLideLinks.Pojisteni) 
    })

    it('loads and shows expected element', () => { 
      navigLideComponent.navigateToPage(NavigLideLinks.Sporeni) 
    })

    it('loads and shows expected element', () => { 
      navigLideComponent.navigateToPage(NavigLideLinks.Investice) 
    })

    it('loads and shows expected element', () => { 
      navigLideComponent.navigateToPage(NavigLideLinks.Bydleni) 
    })
})
