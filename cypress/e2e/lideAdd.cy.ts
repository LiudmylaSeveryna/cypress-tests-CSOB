// needed to correct

import lideAdditionalLinks from "../pages/components/lide.add.component";
import lidePage from '../pages/lide/lidePage';
import navigLideComponent, { NavigLideLinks } from '../pages/components/navig.lide.component';

beforeEach(() => {
  cy.visit('/lide');
  cy.cookieConsent();
  navigLideComponent.navigateToPage(NavigLideLinks.Ucty);
});

it('Validate additional links block count and first link', () => {
  lideAdditionalLinks.container().should('exist');

  // validate first additional signpost 
  lideAdditionalLinks.linkByIndex(1)
    .should('have.attr', 'href').and('include', 'prevedte-si-ucet-k-nam');

  lideAdditionalLinks.linkTextByIndex(25).should('contain.text', 'Změna banky');
});