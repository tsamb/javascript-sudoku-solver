# JavaScript Sudoku Solver

A [Sudoku](https://en.wikipedia.org/wiki/Sudoku) solver written in JavaScript. [Click here](http://tsamb.github.io/sudoku) for the web version of the solver.

This code previously used ES6 and ES7 features of arrow syntax, the `Array.prototype` method `#includes` and the `new Set()` constructor. Due to lack of support in Safari, Edge and IE, I rewrote functions using those features in ES5. The current iteration of this code is unit tested and passing in Chrome 49, Firefox 43, Safari 8, Edge 25 and Internet Explorer 11.

~~This code uses ES6 arrow syntax and the ES7 array method, `Array.prototype.includes()`. You can run this code in Chrome, Firefox or Node (with the `--harmony` flag to support `includes()`).~~

## Usage

### Browser

You can play with an interactive GUI version of the solver [at this website](https://tsamb.github.io/sudoku).

### Console

Call the `SudokuSolver.solve()` function with an 81 character string where hyphens, "-", represent unsolved cells on the board.

Given a valid puzzle, `SudokuSolver.solve()` will return an 81 character string with all the hyphens filled in with numbers. `SudokuSolver.solve()` will return `false` for an invalid puzzle.

You can also call `SudokuSolver.solveAndPrint()` which will pretty print a 2D representation of the solved board to `console.log` and return the 81 character solved string.

Three puzzles of varying difficulties have been defined in the global scope for testing and demonstration:

* `EASY_PUZZLE`
* `MEDIUM_PUZZLE`
* `HARD_PUZZLE`

You can, for example, call:

```js
SudokuSolver.solveAndPrint(MEDIUM_PUZZLE)
```

## Algorithm

This solver uses a backtracking tree-based recursive search algorithm:

1. If a given board state is invalid return false (base case)
- If a given board state has no blank spaces left return the board (base case)
- Find the next empty cell on the board and its possible choices
- Iterate through each possible choice:
  1. Replace the empty cell with the current possible choice
  - Call the current function with the new board state; that is, create a new stack frame and go back to 1.
  - If a truthy base case is found down some recursive branch, return that board state to the parent caller
- If iteration completes without finding a valid board, return false to the parent caller (reaching this step indicates a dead end and returning false results in the continuation of the iteration in the previous stack frame)

## Unit testing

Every function has a corresponding [Jasmine](https://github.com/jasmine/jasmine) spec. You can run the tests on your own browser by [visiting this page](https://tsamb.github.io/sudoku/jasmine/SpecRunner.html).

All functions have been wrapped in a module assigned to the `SudokuSolver` namespace. The immediately invoked function assigned to `SudokuSolver` accepts a boolean as an argument, labelled as `TESTABLE` in the code. If `TESTABLE` is set to true, all functions in the module will be publicly available. If `TESTABLE` is set to false, only `SudokuSolver.solve()` and `SudokuSolver.solveAndPrint()` will be publicly available to call.
