# cypress-tests

This repository contains Cypress test files for three UI components from [the-internet.herokuapp.com](http://the-internet.herokuapp.com).

- [`/cypress/integration/1-iframe.spec.js`](https://github.com/nelsonlove/cypress-tests/blob/main/cypress/integration/1-iframe.spec.js): Test of [TinyMCE text editor in iframe](http://the-internet.herokuapp.com/iframe). Types message into iframe, uses menu to format text, and asserts that text was formatted correctly.
- [`/cypress/integration/2-drag-and-drop.spec.js`](https://github.com/nelsonlove/cypress-tests/blob/main/cypress/integration/2-drag-and-drop.spec.js): Test of [Drag and drop](http://the-internet.herokuapp.com/drag_and_drop). Drags element A to element B's place and asserts that they changed places.
- [`/cypress/integration/3-infinite-scroll.spec.js`](https://github.com/nelsonlove/cypress-tests/blob/main/cypress/integration/3-infinite-scroll.spec.js): Test of [div with infinite scroll](http://the-internet.herokuapp.com/infinite_scroll). Scrolls within a div element and asserts that new child divs are being added.

## `find_word()`

The repo also contains a JavaScript function, `find_word()`, which takes as input a 2D array `grid` and a string `word`, returning `true` if `word` can be constructed from orthogonally adjacent letters in the array. The function can be found in [`/findWord.js`](https://github.com/nelsonlove/cypress-tests/blob/main/findWord.js), with a numer of test cases included in the spec file at [`cypress/integrations/4.find-word.spec.js`](https://github.com/nelsonlove/cypress-tests/blob/main/cypress/integration/4-find-word.spec.js).

## Workflow

I have included a GitHub Actions workflow which starts Cypress and runs the included tests; its YAML file can be found at [`/.github/workflows/cypress-tests.yml`](https://github.com/nelsonlove/cypress-tests/blob/main/.github/workflows/cypress-tests.yml). (A quick way to run these tests would be to fork this repository and manually invoke the workflow.)
