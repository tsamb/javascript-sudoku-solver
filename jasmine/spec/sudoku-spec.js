describe("SudokuSolver", function() {
  var INVALID_PUZZLE,
      COLUMN_INVALID_PUZZLE,
      BOX_INVALID_PUZZLE,
      EMPTY_PUZZLE,
      SOLVED_PUZZLE,
      EASY_PUZZLE,
      MEDIUM_PUZZLE,
      HARD_PUZZLE;

  beforeEach(function() {
    INVALID_PUZZLE = "1-5812----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
    COLUMN_INVALID_PUZZLE = "1958-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
    BOX_INVALID_PUZZLE = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-167-3-89--";
    EMPTY_PUZZLE = "--------------------------------------------------------------------------------";
    SOLVED_PUZZLE = "12345678945678912378912345621436589736589721489721436553164297864297853197853164";
    EASY_PUZZLE = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
    MEDIUM_PUZZLE = "-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--";
    HARD_PUZZLE = "8----------36------7--9-2---5---7-------457-----1---3---1----68--85---1--9----4--";
  });

  describe("solve", function() {
    describe("for an invalid board", function() {
      it("returns false for an invalid board", function() {
        expect(SudokuSolver.solve(INVALID_PUZZLE)).toEqual(false);
      });
    });

    describe("for a valid board", function() {
      it("returns an 81 charcter string with only numbers", function() {
        expect(SudokuSolver.solve(EASY_PUZZLE)).toMatch(/[1-9]{81}/)
      });
    });
  });

  describe("solveAndPrint", function() {
    it("prints the solved board to the console", function () {
        spyOn(console, 'log');
        SudokuSolver.solveAndPrint(EASY_PUZZLE);
        expect(console.log.calls.first().args[0]).toMatch(/((([1-9] )+[1-9])\n){8}([1-9] )+[1-9]/);
    });

    it("returns an 81 charcter string with only numbers", function() {
      expect(SudokuSolver.solveAndPrint(EASY_PUZZLE)).toMatch(/[1-9]{81}/);
    });
  });

  describe("boardIsInvalid", function() {
    it("returns true when the board has duplicates in row, column or box", function() {
      var boardArray = INVALID_PUZZLE.split("");
      expect(SudokuSolver.boardIsInvalid(boardArray)).toEqual(true);
    });

    it("returns false when the board has no duplicates in row, column or box", function() {
      var boardArray = EASY_PUZZLE.split("");
      expect(SudokuSolver.boardIsInvalid(boardArray)).toEqual(false);
    });
  });

  describe("boardIsValid", function() {
    it("returns true when the board has no duplicates in row, column or box", function() {
      var boardArray = EASY_PUZZLE.split("");
      expect(SudokuSolver.boardIsValid(boardArray)).toEqual(true);
    });

    it("returns false when the board has no duplicates in row, column or box", function() {
      var boardArray = INVALID_PUZZLE.split("");
      expect(SudokuSolver.boardIsValid(boardArray)).toEqual(false);
    });
  });

  describe("boardIsSolved", function() {
    it("returns true when the board contains only numbers", function() {
      expect(SudokuSolver.boardIsSolved(SOLVED_PUZZLE)).toEqual(true);
    });

    it("returns false when the board contains only numbers", function() {
      expect(SudokuSolver.boardIsSolved(EASY_PUZZLE)).toEqual(false);
    });
  });

  describe("getNextCellAndPossibilities", function() {
    it("returns an object with an integer and subarray", function() {
      var boardArray = EMPTY_PUZZLE.split("");
      expect(SudokuSolver.getNextCellAndPossibilities(boardArray)).toEqual({index: 0, choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9']});
    });
  });

  describe("getAllIntersections", function() {
    beforeEach(function(){
      jasmine.addMatchers({
        toContainNumbers: function() {
          return {
            compare: function(actualCollection, expectedNumbers) {
              var set = actualCollection.reduce(function(obj, el) {
                obj[el] = true;
                return obj;
              }, {});
              var allExpectedNumsInSet = expectedNumbers.reduce(function(numbersExist, num) {
                return !!(numbersExist && set[num]);
              }, true);
              return {pass: allExpectedNumsInSet};
            }
          }
        }
      });
    });

    it("returns the values already in an index's row, column and box", function() {
      var boardArray = EASY_PUZZLE.split("");
      expect(SudokuSolver.getAllIntersections(boardArray, 1)).toContainNumbers(["1", "5", "8", "2", "9", "6", "3"]);
    });
  });

  describe("allRowsValid", function() {
    it("returns true when every digit in each row is unique", function() {
      var boardArray = EASY_PUZZLE.split("");
      expect(SudokuSolver.allRowsValid(boardArray)).toEqual(true);
    });

    it("returns false when there are any duplicate values on any row", function() {
      var boardArray = INVALID_PUZZLE.split("");
      expect(SudokuSolver.allRowsValid(boardArray)).toEqual(false);
    });
  });

  describe("getRow", function() {
    it("returns the row for the given index", function() {
      var boardArray = EASY_PUZZLE.split("");
      expect(SudokuSolver.getRow(boardArray, 0)).toEqual(["1", "-", "5", "8", "-", "2", "-", "-", "-"]);
      expect(SudokuSolver.getRow(boardArray, 8)).toEqual(["1", "-", "5", "8", "-", "2", "-", "-", "-"]);
      expect(SudokuSolver.getRow(boardArray, 9)).toEqual(["-", "9", "-", "-", "7", "6", "4", "-", "5"]);
      expect(SudokuSolver.getRow(boardArray, 80)).toEqual(["6", "-", "-", "3", "-", "8", "9", "-", "-"]);
    });
  });

  describe("allColumnsValid", function() {
    it("returns true when every digit in each column is unique", function() {
      var boardArray = EASY_PUZZLE.split("");
      expect(SudokuSolver.allColumnsValid(boardArray)).toEqual(true);
    });

    it("returns false when there are any duplicate values on any column", function() {
      var boardArray = COLUMN_INVALID_PUZZLE.split("");
      expect(SudokuSolver.allColumnsValid(boardArray)).toEqual(false);
    });
  });

  describe("getColumn", function() {
    it("returns the column for the given index", function() {
      var boardArray = EASY_PUZZLE.split("");
      expect(SudokuSolver.getColumn(boardArray, 0)).toEqual(["1", "-", "2", "-", "7", "-", "-", "4", "6"]);
      expect(SudokuSolver.getColumn(boardArray, 9)).toEqual(["1", "-", "2", "-", "7", "-", "-", "4", "6"]);
      expect(SudokuSolver.getColumn(boardArray, 1)).toEqual(["-", "9", "-", "1", "6", "-", "-", "3", "-"]);
      expect(SudokuSolver.getColumn(boardArray, 80)).toEqual(["-", "5", "9", "6", "-", "-", "-", "1", "-"]);
    });
  });

  describe("allBoxesValid", function() {
    it("returns true when every digit in each box is unique", function() {
      var boardArray = EASY_PUZZLE.split("");
      expect(SudokuSolver.allBoxesValid(boardArray)).toEqual(true);
    });

    it("returns false when there are any duplicate values on any box", function() {
      var boardArray = BOX_INVALID_PUZZLE.split("");
      expect(SudokuSolver.allBoxesValid(boardArray)).toEqual(false);
    });
  });

  describe("getBox", function() {
    xit("", function() {
      expect(SudokuSolver.getBox());
    });
  });

  describe("collectionIsValid", function() {
    xit("", function() {
      expect(SudokuSolver.collectionIsValid());
    });
  });

  describe("toString", function() {
    xit("", function() {
      expect(SudokuSolver.toString());
    });
  });
});
