import navigLideComponent, { NavigLideLinks } from "..//components/navig.lide.component"

export default new class LidePage {
    msgCookies = () => cy.get('div[class="ot-sdk-row""]')
    btnTechCookies = () => cy.get('button[id="onetrust-reject-all-handler"]')
    btnAllCookies = () => cy.get('button[id="onetrust-accept-btn-handler"]')

    imgCsobLogo = () => cy.get('img[src="/documents/10710/4049264/logo.svg?v2"]')
    

    lideBreadcrumb = () => cy.get('li[class="html-b-breadcrumb-item"]')
    uctyBreadcrumb = () => cy.get('li[class="html-b-breadcrumb-item pui-current"]')

    lideHeading = () => cy.get('h1');

    lideImgPlusKonto = () => cy.get('img[srcset="/documents/10710/15526786/dlazdice-promo-plus-konto-m-640x500.jpg?v2504"]');
    lideTextPlusKonto = () => cy.get('div[class="html-product-tile-button-description"]')
    lideTextPlusKontoTitle = () => cy.get('a[class="html-product-tile-button-title"]')
    lideTextPlusKontoDescription = () => cy.get('div[class="html-product-tile-button-subtitle"]')
      
    lideZjistitVice = () => cy.get('a[href="/lide/ucty/plus-konto?ic1=CSOB-PWP~bezny-ucet__prod-dlazdice-03092020~hlavni-produkt"]')

    // cookieConsent() {
    // cy.get('body').then($body => {
    //     if ($body.find('button#onetrust-reject-all-handler').length > 0) {
    //         cy.log('Cookie reject button exists, clicking');
    //         cy.get('button#onetrust-reject-all-handler', { timeout: 10000 }).should('be.visible').click({ force: true });
    //     } else {
    //         cy.log('Cookie reject button not present, skipping');
    //         cy.get('.onetrust-pc-dark-filter', { timeout: 15000 }).should('not.exist');
    //     }
    // });
    // }

    headerContentExist () {
        return this.imgCsobLogo()

    }

    breadcrumbsExist () {
        return this.lideBreadcrumb()
        return this.uctyBreadcrumb()  
    }
}
