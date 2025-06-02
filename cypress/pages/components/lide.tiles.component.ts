export default new class productTilesLideComponent {

  allTiles = () => cy.get('.html-c-product-tile');
  allTileLink = ($tile: JQuery<HTMLElement>) => cy.wrap($tile).find('a');
  allTileImage = ($tile: JQuery<HTMLElement>) => cy.wrap($tile).find('img');
  allTileTitle = ($tile: JQuery<HTMLElement>) => cy.wrap($tile).find('.html-introductory');
  allTileDescription = ($tile: JQuery<HTMLElement>) => cy.wrap($tile).find('.html-caption h3');

  tileLink = (n: number) => cy.get('.html-c-product-tile').eq(n - 1).find('a');
  tileImage = (n: number) => cy.get('.html-c-product-tile').eq(n - 1).find('img');
  tileTitle = (n: number) => cy.get('.html-c-product-tile').eq(n - 1).find('div.html-introductory');
  tileDescription = (n: number) => cy.get('.html-c-product-tile').eq(n - 1).find('div.html-caption').find('h3');

  // tileLink1 = () => cy.get('.html-c-product-tile').eq(0).find('a');
  // tileImage1 = () => cy.get('.html-c-product-tile').eq(0).find('img');
  // tileTitle1 = () => cy.get('.html-c-product-tile').eq(0).find('div.html-introductory');
  // tileDescription1 = () => cy.get('.html-c-product-tile').eq(0).find('div.html-caption').find('h3');

}

