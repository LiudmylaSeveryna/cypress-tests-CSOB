// needed to correct
export default new class LideAdditionalLinks {
  container = () => cy.get('div[class="wcm-c-grid"]');
  linkBlocks = () => this.container().children('div[class="wcm-b-grid-4"]');
  
  linkByIndex = (n: number) => cy.get('[class="html-c-additional-signpost html-has-no-icon"]').find('a');
  linkTextByIndex = (n: number) => this.linkByIndex(n - 1).find('span.html-signpost-label');
  linkHrefByIndex = (n: number) => this.linkByIndex(n - 1).invoke('attr', 'href');
  
}
