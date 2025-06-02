 export default new class NavigationComponent {
  lideLink = () => cy.get('a[href="/lide"]');
  firmyPodnikateleLink = () => cy.get('a[href="/firmy"]');
  velkeFirmyLink = () => cy.get('a[href="/korporace"]');
  premiumLink = () => cy.get('a[href="https://www.csobpremium.cz/?source=h"]');
  privatniBankovstviLink = () => cy.get('a[href="https://www.csobpb.cz/index?source=h"]');
    

  
  navigateToPage (page: NavigationLinks) {
    switch (page) {
      case NavigationLinks.Lide:
        this.lideLink().click({ force: true });
        break;
      case NavigationLinks.FirmyPodnikatele:
        this.firmyPodnikateleLink().click();
        break;
      case NavigationLinks.VelkeFirmy:
        this.velkeFirmyLink().click();
        break;
      case NavigationLinks.Premium:
        this.premiumLink().click();
        break;
        case NavigationLinks.PrivatniBankovstvi:
        this.privatniBankovstviLink().click();
        break;

      default:
        throw new Error(`Page ${page} is not implemented in navigation component`);
    }
  }
}

export enum NavigationLinks {
  Lide,
  FirmyPodnikatele,
  VelkeFirmy,
  Premium,
  PrivatniBankovstvi
}