describe('app e2e', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('search input', () => {
    cy.visit('/');

    cy.get('input').should('have.value', '');
    cy.get('input').type('Avatar{enter}');
    cy.get('input').should('have.value', 'Avatar');
  });

  it('navigation', () => {
    cy.visit('/');

    cy.get('h3').contains('About us').click();
    cy.url().should('include', '/about');
    cy.get('h3').contains('Forms').click();
    cy.url().should('include', '/forms');
  });

  it('404', () => {
    cy.visit('/404');
    cy.contains('Page not found');
  });

  it('form invalid', () => {
    cy.visit('/forms');

    cy.get('input[type="submit"]').click();
    cy.get('.invalid-form-text').contains('*add title');
  });

  it('form valid', () => {
    cy.visit('/forms');

    cy.get('input[type="text"]').type('Avatar').should('have.value', 'Avatar');
    cy.get('.input-poster').selectFile('cypress/fixtures/avatar_poster.jpg');
    cy.get('select').select(1).should('have.value', 'Action');
    cy.get('input[type="date"]').type('1990-08-20').should('have.value', '1990-08-20');
    cy.get('input[type="radio"]').first().check().should('be.checked').and('have.value', 'Rumored');
    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="submit"]').click();
    cy.get('h3').contains('Avatar');
  });
});
