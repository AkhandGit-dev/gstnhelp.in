describe('Home', () => {
  it('Loads homepage and finds hero', () => {
    cy.visit('/');
    cy.contains('Complex GST Notices & Refund Resolution');
  });
});