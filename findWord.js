// Please complete the following javascript function in a separate file. Implement the most efficient solution you
// can think of and include a few positive and negative examples to show your function behaves properly:
//
//   1. Given a 2D array of characters grid and a string word, return true if word can be found in grid or false
//     otherwise. The word can be found if it can be constructed from letters that are adjacent to each other
//     horizontally or vertically on the grid.
//
// Function findWord(grid, word) { }
// Example:
//   Input:
//     grid = [
//       ['x', 'c', 'a'],
//       ['d', 'y', 't'],
//       ['o', 'g', 'z']
//     ]
//     word = 'cat'
//   Output:
//     true


export default function findWord(grid, word) {
  function traverse(x, y, letters, visited) {
    if (!letters.length) {  // Array is passed in with remaining letters
      return true;          // If array length is 0, word has been found
    } else if (grid[y][x] !== letters[0]) {
      return false;         // Not on a square with target letter
    } else if (visited.has(Array(x, y).join(''))) {
      return false;         // Already visited this square
    }

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let i = 0; i < directions.length; i++) {
      let [dx, dy] = directions[i];

      // Only check directions that are in bounds
      if ((x + dx >= 0 && x + dx <= grid[0].length - 1)
        && (y + dy >= 0 && y + dy <= grid.length - 1)) {

        // Copy set of visited squares for traversal attempt
        const visitedCopy = new Set(visited);
        visitedCopy.add(Array(x, y).join(''));

        if (traverse(x + dx, y + dy, letters.slice(1), visitedCopy)) {
          return true;
        }
      }
    }
    return false;
  }

  for (let iy = 0; iy < grid.length; iy++) {
    for (let ix = 0; ix < grid[0].length; ix++) {
      if (traverse(ix, iy, word.split(''), new Set())) {
        return true;
      }
    }
  }
  return false;
}
