describe('app e2e', () => {
  it('should have input', () => {
    cy.visit('/');

    cy.get('input').should('have.value', '');
  });
});
