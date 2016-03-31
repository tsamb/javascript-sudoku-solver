describe("SudokuSolver", function() {
  var INVALID_PUZZLE = "1158-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
  var EASY_PUZZLE = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
  var MEDIUM_PUZZLE = "-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--";
  var HARD_PUZZLE = "8----------36------7--9-2---5---7-------457-----1---3---1----68--85---1--9----4--";

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
    it("", function() {
      expect(SudokuSolver.solveAndPrint())
    })
  });

  describe("boardIsInvalid", function() {
    it("", function() {
      expect(SudokuSolver.boardIsInvalid())
    })
  });

  describe("boardIsValid", function() {
    it("", function() {
      expect(SudokuSolver.boardIsValid())
    })
  });

  describe("boardIsSolved", function() {
    it("", function() {
      expect(SudokuSolver.boardIsSolved())
    })
  });

  describe("getNextCellAndPossibilities", function() {
    it("", function() {
      expect(SudokuSolver.getNextCellAndPossibilities())
    })
  });

  describe("getAllIntersections", function() {
    it("", function() {
      expect(SudokuSolver.getAllIntersections())
    })
  });

  describe("allRowsValid", function() {
    it("", function() {
      expect(SudokuSolver.allRowsValid())
    })
  });

  describe("getRow", function() {
    it("", function() {
      expect(SudokuSolver.getRow())
    })
  });

  describe("allColumnsValid", function() {
    it("", function() {
      expect(SudokuSolver.allColumnsValid())
    })
  });

  describe("getColumn", function() {
    it("", function() {
      expect(SudokuSolver.getColumn())
    })
  });

  describe("allBoxesValid", function() {
    it("", function() {
      expect(SudokuSolver.allBoxesValid())
    })
  });

  describe("getBox", function() {
    it("", function() {
      expect(SudokuSolver.getBox())
    })
  });

  describe("collectionIsValid", function() {
    it("", function() {
      expect(SudokuSolver.collectionIsValid())
    })
  });

  describe("toString", function() {
    it("", function() {
      expect(SudokuSolver.toString())
    })
  });
});
