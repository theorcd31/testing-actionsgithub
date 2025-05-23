/// <reference types="cypress" />

describe('Page d’accueil', () => {
  it('doit afficher le titre de la page', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Bienvenue').should('be.visible')
  })

  it('navigue vers une autre vue via un lien', () => {
    cy.visit('http://localhost:5173')
    cy.get('a[href="/about"]').click()
    cy.url().should('include', '/about')
  })
})
