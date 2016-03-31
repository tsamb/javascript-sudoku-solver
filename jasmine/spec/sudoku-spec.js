describe("SudokuSolver", function() {
  var INVALID_PUZZLE, EASY_PUZZLE, MEDIUM_PUZZLE, HARD_PUZZLE;
  beforeEach(function() {
    INVALID_PUZZLE = "1158-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
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
    it("", function() {
      expect(SudokuSolver.getAllIntersections());
    });
  });

  describe("allRowsValid", function() {
    it("", function() {
      expect(SudokuSolver.allRowsValid());
    });
  });

  describe("getRow", function() {
    it("", function() {
      expect(SudokuSolver.getRow());
    });
  });

  describe("allColumnsValid", function() {
    it("", function() {
      expect(SudokuSolver.allColumnsValid());
    });
  });

  describe("getColumn", function() {
    it("", function() {
      expect(SudokuSolver.getColumn());
    });
  });

  describe("allBoxesValid", function() {
    it("", function() {
      expect(SudokuSolver.allBoxesValid());
    });
  });

  describe("getBox", function() {
    it("", function() {
      expect(SudokuSolver.getBox());
    });
  });

  describe("collectionIsValid", function() {
    it("", function() {
      expect(SudokuSolver.collectionIsValid());
    });
  });

  describe("toString", function() {
    it("", function() {
      expect(SudokuSolver.toString());
    });
  });
});
