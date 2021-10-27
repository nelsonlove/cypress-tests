/// <reference types="cypress" />


import findWord from "../../findWord.js"


// Test cases
const tests = [
  {
    grid: [],
    cases: [
      ['Returns false on empty grid', 'cat', false],
    ],
  },
  {
    grid: [
      ['x', 'c', 'a'],
      ['d', 'y', 't'],
      ['o', 'g', 'z'],
    ],
    cases: [
      ['Returns false if first letter not in grid', 'q', false],
      ['Finds word in corner', 'cat', true],
      ['Finds vertical word', 'cyg', true],
      ['Finds horizontal word', 'dyt', true],
      ['Finds single letter', 'y', true],
      ['Diagonal moves not allowed', 'ayo', false],
      ['Non-adjacent moves not allowed', 'taco', false],
      ['Returns false if search terminates by running out of squares', 'xdogycatzzz', false],
    ],
  },
  {
    grid: [
      ['x', 'c', 'a', 't'],
      ['d', 'y', 'i', 'n'],
      ['c', 'e', 'p', 'f'],
      ['a', 'c', 'b', 'w'],
      ['r', 'a', 'c', 'h'],
    ],
    cases: [
      ['Works on word with multiple turns', 'catnip', true],
      ['Reusing letters not permitted', 'racecar', false],
    ],
  },
  {
    grid: [
      ['f', 'x', 't', 'k', 't'],
      ['g', 'n', 'r', 'c', 'r'],
      ['n', 'i', 'a', 'a', 'a'],
      ['i', 'k', 'c', 'b', 'c'],
    ],
    cases: [
      ['Works with grid where x > y', 'king', true],
      ['Handles partial paths with dead ends', 'backtracking', true],
    ],
  },
  {
    grid: [
      ['t', 'f', 'g'],
      ['a', 'd', 'h'],
      ['l', 's', 'j'],
      ['l', 'a', 'k'],
      ['g', 'd', 'l'],
      ['r', 'i', 'm'],
    ],
    cases: [
      ['Works with grid where y > x', 'tallgrid', true],
    ],
  },
];


describe('Tests for findWord()', () => {
  // dynamically create a single test for each operation in the list
  tests.forEach((test) => {
    test.cases.forEach((testCase) => {
      const [desc, word, expected] = testCase
      it(`${desc}: findWord('${word}') == ${expected}`, () => {
        test.grid.map((row) => cy.log(JSON.stringify(row)))
        cy.wrap(findWord(test.grid, word)).should('equal', expected)
      })
    })
  })
})
