import executRegistation, {} from "..//pages/lide/registrationForm"  
import lidePage from "..//pages/lide/lidePage"

  describe('validation the filling of the registration form', () => {
    beforeEach(() => { // ignores error "uncaught:exception"
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        }); 
        cy.visit('/konto-hned');
        cy.wait(3000); 
        lidePage.cookieConsent();
        //executRegistation.confirmSubmission().click()
        })
   
    it('registation on form - invalid name', () => {
        cy.fixture('userRegistrationForm.json').then((userName) => {
        executRegistation.register(userName.nameInvalid, userName.surnameValid, userName.phoneNumberValid, userName.emailValid)
        executRegistation.nameError().should('be.visible').and('contain.text', 'Zadejte minimálně 2 znaky');
        })
    })

    it('registation on form - invalid surname', () => {
        cy.fixture('userRegistrationForm.json').then((userName) => {
        executRegistation.register(userName.nameValid, userName.surnameInvalid, userName.phoneNumberValid, userName.emailValid)  
        executRegistation.surnameError().should('be.visible').and('contain.text', 'Zadejte minimálně 2 znaky');
        })
    })
        
    it('registation on form - invalid phone', () => {
        cy.fixture('userRegistrationForm.json').then((userName) => {
        executRegistation.register(userName.nameValid, userName.surnameValid, userName.phoneNumberInvalid, userName.emailValid)  
        executRegistation.phoneError().should('be.visible').and('contain.text', 'Zadejte platné telefonní číslo');
        })
    })

    it('registation on form - invalid email', () => {
        cy.fixture('userRegistrationForm.json').then((userName) => {
        executRegistation.register(userName.nameValid, userName.surnameValid, userName.phoneNumberValid, userName.emailInvalid)  
        cy.get('body').click();
        executRegistation.emailError().should('be.visible').and('contain.text', 'Zadejte platný e-mail');
        })
    })

    it('registation on form - valid all fields', () => {
        cy.fixture('userRegistrationForm.json').then((userName) => {
        executRegistation.register(userName.nameValid, userName.surnameValid, userName.phoneNumberValid, userName.emailValid)  
        executRegistation.buttonPokracovat().click()
        executRegistation.bannerSuccess().should('be.visible').and('contain.text', 'Sjednání Plus Konta');
        })
    })


})