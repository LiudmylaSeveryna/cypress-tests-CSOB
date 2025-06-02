import authorizEnterPage from "..//pages/lide/autorization"
import lidePage from "..//pages/lide/lidePage"
import navigLideComponent, { NavigLideLinks } from "..//pages/components/navig.lide.component"
import headerContentExist, {} from "..//pages/lide/lidePage"

describe('template spec', () => {
    beforeEach(() => { // ignores error "uncaught:exception"
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
    });
});
  it('validate details on pge Plus Konto', () => {
    cy.visit('/lide');
    lidePage.cookieConsent();
    navigLideComponent.navigateToPage(NavigLideLinks.Ucty);

    authorizEnterPage.signInClient()

    cy.url().should('include', '/lide/ucty/plus-konto');
    // validate navigation
    headerContentExist.imgCsobLogo().should('be.visible') // logo
    navigLideComponent.lideUctyLink().should('be.visible')
    navigLideComponent.lidePujckyLink().should('be.visible')
    navigLideComponent.lidePojisteniLink().should('be.visible')
    navigLideComponent.lideSporeniLink().should('be.visible')
    navigLideComponent.lideInvesticeLink().should('be.visible')
    navigLideComponent.lideBydleniLink().should('be.visible')
    
    navigLideComponent.lideStatKlientem().should('be.visible')
    navigLideComponent.lidePrihlaseni().should('be.visible')
    navigLideComponent.lideSearch().should('be.visible')

    // validate main banner and buttons
    authorizEnterPage.mainBannerBankAccount().should('be.visible').and('contain', 'Bankovní účet')
    authorizEnterPage.mainBannerPicture().should('be.visible')
    authorizEnterPage.buttonSjednatOnline().should('be.visible')
    
    authorizEnterPage.buttonSjednatMobile().should('exist')
    authorizEnterPage.buttonSjednatWeb().should('be.visible')
    authorizEnterPage.orderOnlineAccount()

    cy.url().should('include', '/konto-hned');
  })
})