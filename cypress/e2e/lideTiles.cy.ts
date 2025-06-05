import productTiles from "../pages/components/lide.tiles.component"
import lidePage from "..//pages/lide/lidePage"
import navigLideComponent, { NavigLideLinks } from "..//pages/components/navig.lide.component"

beforeEach(() => { // ignores error "uncaught:exception"
//cy.intercept('GET', '**mluvii.csob.cz/**', {statusCode: 204, body: '',}).as('mluvii');
  cy.visit('/lide');
  cy.cookieConsent();
  navigLideComponent.navigateToPage(NavigLideLinks.Ucty)  
  });  

  // it('Validate all tiles, can should all attributes', () => {
    
  //   cy.url().should('include', '/lide/ucty');
   
  //   productTiles.allTiles().should('exist').and('have.length.at.least', 1);
  //   productTiles.allTiles().each(($tile) => {
  //     // Validate href
  //     productTiles.allTileLink($tile).should('have.attr', 'href')
  //     productTiles.allTileImage($tile).should('be.visible').and(($img) => {
  //         expect($img.attr('srcset')).to.exist;
  //       });
  //     productTiles.allTileTitle($tile).invoke('text').should('not.be.empty');
  //     productTiles.allTileDescription($tile).invoke('text').should('not.be.empty');
  //   });

  it('Validate tile1, can should all attributes', () => {
    cy.url().should('include', '/lide/ucty');
    productTiles.tileLink(1).should('have.attr', 'href').and('include', 'pro-deti');
    productTiles.tileImage(1).should('be.visible');
    productTiles.tileTitle(1).should('contain.text', 'Účet pro děti');
    productTiles.tileDescription(1).should('contain.text', 'Je zdarma a hodí se na kapesné');
  });

  it('Validate tile2, can should all attributes', () => {
    cy.url().should('include', '/lide/ucty');
    productTiles.tileLink(2).should('have.attr', 'href').and('include', 'studentsky');
    productTiles.tileImage(2).should('be.visible');
    productTiles.tileTitle(2).should('contain.text', 'Účet pro mladé 18');
    productTiles.tileDescription(2).should('contain.text', 'Běžný účet bez poplatků pro mladé');
  });
  
//})