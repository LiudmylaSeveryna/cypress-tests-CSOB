// work with errors
export default new class NavigationLideComponent {
 
  lideUctyLink = () => cy.contains('div', 'Produkty', { timeout: 10000 }).find('a[href="/lide/ucty"]');
  lidePujckyLink = () => cy.contains('div', 'Produkty', { timeout: 10000 }).find('a[href="/lide/pujcky"]');
  lidePojisteniLink = () => cy.contains('div', 'Produkty').find('a[href="/lide/pojisteni"]');
  lideSporeniLink = () => cy.contains('div', 'Produkty', { timeout: 10000 }).find('a[href="/lide/sporeni"]');
  lideInvesticeLink = () => cy.contains('div', 'Produkty', { timeout: 10000 }).find('a[href="/lide/investicni-produkty"]');
  lideBydleniLink = () => cy.contains('div', 'Produkty', { timeout: 10000 }).find('a[href="/lide/bydleni"]');

  lideStatKlientem = () => cy.get('div[class="html-prj1171-toggle"] strong').contains('Stát se klientem');
  lidePrihlaseni = () => cy.get('div[data-prj1171-dropdown-id="smartbanking"] strong');
  lideSearch = () => cy.get('strong[class="pui-search-toggle-button"]');  

  navigateToPage (page: NavigLideLinks) {
    switch (page) {
      case NavigLideLinks.Ucty:
        this.lideUctyLink().click({ force: true });
        break;
      case NavigLideLinks.Pujcky:
        this.lidePujckyLink().click({ force: true });
        break;
      case NavigLideLinks.Pojisteni:
        this.lidePojisteniLink().click({ force: true });
        break;
      case NavigLideLinks.Sporeni:
        this.lideSporeniLink().click({ force: true });
        break;
      case NavigLideLinks.Investice:
        this.lideInvesticeLink().click({ force: true });
        break;
      case NavigLideLinks.Bydleni:
        this.lideInvesticeLink().click({ force: true });
        break;

      default:
        throw new Error(`Page ${page} is not implemented in navigation component`);
    }
  }
}

export enum NavigLideLinks {
    Ucty,
    Pujcky,
    Pojisteni,
    Sporeni,
    Investice,
    Bydleni
}