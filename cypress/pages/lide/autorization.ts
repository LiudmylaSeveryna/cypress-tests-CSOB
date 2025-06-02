import navigationLideComponent from '../components/navig.lide.component';

export default new class AuthorizEnterPage{
   
    adultsList = () => cy.get('a[href="/lide/ucty/plus-konto"]').contains('Dospělí')
    mainBannerBankAccount = () => cy.get('[class="html-b-content"]')
    mainBannerPicture = () => cy.get('div[class="html-b-main-banner-column"]') 
    buttonSjednatOnline = () => cy.get('a[href="#sjednat-online"]').contains('Sjednat online')
    buttonSjednatMobile = () => cy.get('[class="html-b-complementary-product-control"] a#wcm-mobile')
    buttonSjednatWeb = () => cy.get('[href="/konto-hned"]').contains('Sjednat')

    signInClient() {
        navigationLideComponent.lideStatKlientem().click({ force: true })
        this.adultsList().click({ force: true })
    }

    orderOnlineAccount() {
        this.buttonSjednatOnline().click({ force: true })
        this.buttonSjednatWeb().click({ force: true })
    }

}