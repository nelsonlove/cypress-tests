/// <reference types="cypress" />

// 1. ESP has many places where we use iframes. At http://the-internet.herokuapp.com/iframe you will find a website
// containing a text editor with an iframe. Write a simple test case in Cypress.io where you type a message into the
// iframe, use the menu to format the text (your choice), and then assert the text was formatted correctly.

it('Can format text in iframe', () => {
  cy.visit('http://the-internet.herokuapp.com/iframe')

  cy.get('iframe')
        .its('0.contentDocument.body')
        .as('iframe')
        .should('not.be.empty')

    // Clear the existing message with a new document
    cy.get('@iframe')
      .get('div.tox-menubar')
      .as('menubar')
      .contains('File')
      .click()
    cy.get('@iframe')
      .get('div.tox-selected-menu')
      .as('menu')
      .contains('New document')
      .click()

    // Type new message
    const message = "Fortune favors the bold!"
    cy.get('@iframe')
      .find('p')
      .as('content')
      .type("Fortune favors the bold!")

    // Format the message, making it bold
    cy.get('@menubar')
      .contains('Edit')
      .click()
    cy.get('@menu')
      .contains('Select all')
      .click()
    cy.get('@menubar')
      .contains('Format')
      .click()
    cy.get('@menu')
      .contains('Bold')
      .click()

  // Message should now be inside a <strong> element
  cy.get('@content')
      .find('strong')
      .should('exist')
      .should('have.text', message)
  });
