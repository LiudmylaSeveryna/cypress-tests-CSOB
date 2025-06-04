export default new class RegistrFormPage{
    confirmSubmission = () => cy.get('button[class="html-button js-exponea-close"]')

    nameInput = () => cy.get('input[id="onb-lead-page-name-input"]')
    surnameInput = () => cy.get('input[id="onb-lead-page-surname-input"]')
    phoneInput = () => cy.get('input[id="onb-lead-page-phone-input"]')
    emailInput = () => cy.get('input[id="onb-lead-page-email-input"]')

    nameError = () => cy.get('#onb-lead-page-name-input').closest('.crct-c-frm1001').find('.crct-information-tooltip')
    surnameError = () =>  cy.get('#onb-lead-page-surname-input').closest('.crct-c-frm1001').find('.crct-information-tooltip')
    phoneError = () => cy.get('#onb-lead-page-phone-input').closest('.crct-c-frm1001').find('.crct-information-tooltip')
    emailError = () => cy.get('#onb-lead-page-email-input').closest('.crct-c-frm1001').find('.crct-information-tooltip')

    buttonPokracovat = () => cy.get('button[class="crct-frm1006-button"]')
    bannerSuccess = () => cy.get('div[class="rct-b-banner-content pui-picturefill-background pui-js-picturefill-background-init-rct"]')

    register(name: string, surname: string, phone: string, email: string) { 
        this.nameInput().type(name)
        this.surnameInput().type(surname)
        this.phoneInput().type(phone)
        this.emailInput().clear().type(email)

    }
    
}