export class TopVoluntari {
  static TopVoluntari() {
    return cy.get('a[href*="/search"]');
  }
  static DismissButton() {
    return cy.get(".dismissButton");
  }
  static Map() {
    return cy.get(":nth-child(9) > .gm-control-active");
  }
  static ZoominMap() {
    return cy.get('[aria-label="Zoom in"]');
  }
  static ZoomoutMap() {
    return cy.get('[aria-label="Zoom out"]');
  }
}
