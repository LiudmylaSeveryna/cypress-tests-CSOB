export default new class LideAdditionalLinks { 
  allAdds = () => cy.get('.html-c-additional-signpost');
  allAddsLink = ($add: JQuery<HTMLElement>) => cy.wrap($add).find('a');
  allAddsDescription = ($add: JQuery<HTMLElement>) => cy.wrap($add).find('.html-signpost-label');

  AddsLink = (n: number) => cy.get('.html-c-additional-signpost').eq(n - 1).find('a');
  AddsDescription = (n: number) => cy.get('.html-c-additional-signpost').eq(n - 1).find('.html-signpost-label');
}
