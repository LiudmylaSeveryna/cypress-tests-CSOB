import productTiles from "../pages/components/lide.tiles.component"
import lidePage from "..//pages/lide/lidePage"
import navigLideComponent, { NavigLideLinks } from "..//pages/components/navig.lide.component"

beforeEach(() => {
  //cy.intercept('GET', '**mluvii.csob.cz**', { statusCode: 200, body: {} });
  cy.visit('/lide');
  lidePage.cookieConsent();
  //navigComponent.navigateToPage(NavigationLinks.Lide)
  navigLideComponent.navigateToPage(NavigLideLinks.Ucty)  
  });  

  // it('Validate all tiles, can should all attributes', () => {
    
  //   cy.url().should('include', '/lide/ucty');
   
  //   productTiles.allTiles().should('exist').and('have.length.at.least', 1);
  //   productTiles.allTiles().each(($tile) => {
  //     // Validate href
  //     productTiles.allTileLink($tile).should('have.attr', 'href')
  //     productTiles.allTileImage($tile).should('be.visible').and(($img) => {
  //         expect($img.attr('src') || $img.attr('srcset')).to.exist;
  //       });
  //     productTiles.allTileTitle($tile).invoke('text').should('not.be.empty');
  //     productTiles.allTileDescription($tile).invoke('text').should('not.be.empty');
  //   });

  it('Validate tile1, can should all attributes', () => {
    cy.url().should('include', '/lide/ucty');
    //cy.intercept('GET', '**/widget/**/state*', { statusCode: 200, body: {} }).as('mluvii');
    productTiles.tileLink(1).should('have.attr', 'href').and('include', 'pro-deti');
    productTiles.tileImage(1).should('be.visible');
    productTiles.tileTitle(1).should('contain.text', 'Účet pro děti');
    productTiles.tileDescription(1).should('contain.text', 'Je zdarma a hodí se na kapesné');
  });

  it('Validate tile2, can should all attributes', () => {
    cy.url().should('include', '/lide/ucty');
    //cy.intercept('GET', '**mluvii.csob.cz**', { statusCode: 200, body: {} });
    productTiles.tileLink(2).should('have.attr', 'href').and('include', 'studentsky');
    productTiles.tileImage(2).should('be.visible');
    productTiles.tileTitle(2).should('contain.text', 'Účet pro mladé 18');
    productTiles.tileDescription(2).should('contain.text', 'Běžný účet bez poplatků pro mladé');
  });
  
//})