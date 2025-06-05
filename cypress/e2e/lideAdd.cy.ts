import lideAdditionalLinks from "../pages/components/lide.add.component";
import navigLideComponent, { NavigLideLinks } from '../pages/components/navig.lide.component';

beforeEach(() => {
  cy.visit('/lide');
  cy.cookieConsent();
  navigLideComponent.navigateToPage(NavigLideLinks.Ucty);
});
  it('Validate all addsLink, can should all attributes', () => { 
    cy.url().should('include', '/lide/ucty'); 
    lideAdditionalLinks.allAdds().should('exist').and('have.length', 9);
    lideAdditionalLinks.allAdds().each(($add) => {
    lideAdditionalLinks.allAddsLink($add).should('have.attr', 'href')
    lideAdditionalLinks.allAddsDescription($add).invoke('text').should('not.be.empty');
    });
  });
  it('Validate add1, can should all attributes', () => {
    cy.url().should('include', '/lide/ucty');
    lideAdditionalLinks.AddsLink(1).should('have.attr', 'href').and('include', 'prevedte-si-ucet-k-nam');
    lideAdditionalLinks.AddsDescription(1).should('contain.text', 'Změna banky');
  });
  it('Validate add2, can should all attributes', () => {
    cy.url().should('include', '/lide/ucty');
    lideAdditionalLinks.AddsLink(2).should('have.attr', 'href').and('include', 'zakladni-ucet');
    lideAdditionalLinks.AddsDescription(2).should('contain.text', 'Základní účet');
  });
  