/// <reference types="cypress" />

import findWord from '../../findWord.js';

const tests = [
  {
    desc: '3x3 grid',
    grid: [
      ['x', 'c', 'a'],
      ['d', 'y', 't'],
      ['o', 'g', 'z'],
    ],
    cases: [
      ['Returns false if first letter not in grid', 'q', false],
      ['Matches word in corner', 'cat', true],
      ['Matches vertical word', 'cyg', true],
      ['Matches horizontal word', 'dyt', true],
      ['Matches single letter', 'y', true],
      ['Diagonal moves not allowed', 'ayo', false],
      ['Non-adjacent moves not allowed', 'taco', false],
      ['Returns false if search terminates by running out of squares', 'xdogycatzzz', false],
    ],
  },
  {
    desc: '5x5 grid',
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
    desc: '5x4 grid',
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
    desc: '3x5 grid',
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
  {
    desc: 'Empty grid',
    grid: [],
    cases: [
      ['Returns false on empty grid', 'cat', false],
    ],
  },
  {
    desc: '1x1 grid',
    grid: [['q']],
    cases: [
      ['Returns true on 1x1 grid', 'q', true],
    ],
  },
  {
    desc: '1x5 grid',
    grid: [['h', 'e', 'l', 'l', 'o']],
    cases: [
      ['Matches word in 5x1 grid', 'hello', true],
    ],
  },
  {
    desc: '5x1 grid',
    grid: [
      ['h'],
      ['e'],
      ['l'],
      ['l'],
      ['o'],
    ],
    cases: [
      ['Matches word in 5x1 grid', 'hello', true],
    ],
  },
  // Want to ensure that algorithm isn't unreasonably slow
  {
    desc: 'Grid with single letter',
    grid: [
      ['a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a'],
    ],
    cases: [
      ['Matches single-letter string in single-letter grid', 'aaaaaaaaaaaaaaa', true],
      ['Returns false on nonexistent letter in single-letter grid', 'aaaaaaaaaaaazaa', false],
    ],
  },
  {
    desc: 'Grid with mostly single letters',
    grid: [
      ['a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'z', 'a'],
      ['a', 'a', 'a', 'a', 'z'],
    ],
    cases: [
      ['Returns false on nonexistent letter in single-letter grid', 'aaaaaaaaaaaaazz', false],
    ],
  },
];

describe('Tests for findWord()', () => {
  tests.forEach((test) => {
    describe(test.desc, () => {
      test.cases.forEach(([desc, word, expected]) => {
        it(`${desc}: findWord('${word}') == ${expected}`, () => {
          test.grid.map((row) => cy.log(JSON.stringify(row)));
          cy.wrap(findWord(test.grid, word)).should('equal', expected);
        });
      });
    });
  });
});
