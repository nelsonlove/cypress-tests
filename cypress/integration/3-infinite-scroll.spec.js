/// <reference types="cypress" />

// 3. Another feature used widely in ESP is infinite scroll. http://the- internet.herokuapp.com/infinite_scroll
// contains a div with infinite scroll. Please automate a test that assert that as you scroll the div, new child
// divs populate the DOM

describe('Infinite scroll', () => {

  it('New child divs are rendered on scroll', () => {
    cy.visit('http://the-internet.herokuapp.com/infinite_scroll');

    let initial_divs;

    cy.get('div.jscroll-inner')
      .children()
      .its('length')
      .then((length) => {
        initial_divs = length;
      });

    // Scrolling five times should yield five new divs
    for (let i = initial_divs; i < initial_divs + 5; i++) {
      cy.get('div.jscroll-inner')
        .children()
        .should('have.lengthOf', i);

      cy.scrollTo('bottom')
        .wait(500);
    }
  });
});
// for (let i = 0; i < 5; i++) {
//   cy.get('div.jscroll-inner')
//     .children()
//     .should('have.lengthOf', i)
//     .its('length')
//     .then(children => {
//       cy.wrap(children)
//         .its('length')
//         .should('eq', numberOfChildren)
//     })
//   cy.scrollTo('bottom', {duration: 5000})
//     .wait('@blog')
//     .then(() => numberOfChildren += 4)
// }
