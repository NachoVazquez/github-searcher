import { getContent, getTopBar, getUserSearch } from '../support/app.po';

describe('github-searcher', () => {
  beforeEach(() => cy.visit('/'));

  it('should display layout', () => {
    getTopBar().contains('Github Searcher');
    getContent().should('be.visible');
  });

  it('should navigate to the user search page', () => {
    cy.url().should('include', '/users');

    getUserSearch().should('be.visible');
  });
});
