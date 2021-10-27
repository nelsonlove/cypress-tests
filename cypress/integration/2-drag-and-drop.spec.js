/// <reference types="cypress" />

// 2. One of our pain points with automating ESP is drag and drop. http://the-internet.herokuapp.com/drag_and_drop
// has a very simple website that allows you to drag one element to another and they swap places. Please write a
// test that drags 'A' to 'B' and assert they changed place.

it('Column A changes place with column B', () => {
  cy.visit('http://the-internet.herokuapp.com/drag_and_drop');

  // Text of column's header element is what actually changes place
  cy.get('#column-a>header')
    .should('have.text', 'A')
  cy.get('#column-b>header')
    .should('have.text', 'B')

  // Trigger drag-and-drop
  const dataTransfer = new DataTransfer;
  cy.get('#column-a')
    .trigger('dragstart', { dataTransfer })
  cy.get('#column-b')
    .trigger('drop', { dataTransfer })
  cy.get('#column-a')
    .trigger('dragend')

  // Header text should be switched now
  cy.get('#column-a>header')
    .should('have.text', 'B')
  cy.get('#column-b>header')
    .should('have.text', 'A')
});
