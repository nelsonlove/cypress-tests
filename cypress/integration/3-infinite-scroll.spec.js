// 3. Another feature used widely in ESP is infinite scroll. http://the- internet.herokuapp.com/infinite_scroll
// contains a div with infinite scroll. Please automate a test that assert that as you scroll the div, new child
// divs populate the DOM

it('New child divs are rendered on scroll', () => {
  cy.visit('http://the-internet.herokuapp.com/infinite_scroll');

  // Initally there are two divs
  const initial_divs = 2
  cy.get('.jscroll-added')
    .should('have.lengthOf', initial_divs)

  // Scrolling five times should yield five new divs
  for (let i = initial_divs + 1; i < initial_divs + 5; i++) {
    // Wait appears necessary for div to render
    cy.scrollTo('bottom')
      .wait(100)
    cy.get('.jscroll-added')
      .should('have.lengthOf', i)
  }
});
