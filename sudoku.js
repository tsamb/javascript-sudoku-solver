var TEST_BOARD = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--".split("");

function solve(boardString) {
  var boardArray = boardString.split("");
  if (boardIsInvalid(boardArray)) { return false }
  if (boardIsSolved(boardArray)) { return boardString }
  var nextUnsolvedCellIndex, possibilities;
  [nextUnsolvedCellIndex, possibilities] = getCellWithLeastPossibilities(boardArray);
  possibilities.forEach(function(numberGuess) {
    boardArray[nextUnsolvedCellIndex] = numberGuess;
    var solvedBoard = solve(boardArray.join(""));
    if (solvedBoard) { return solvedBoard }
  });
  return false;
}

function boardIsInvalid(boardArray) {
  return !boardIsValid(boardArray);
}

function boardIsValid(boardArray) {
  return (allRowsValid(boardArray) && allColsValid(boardArray) && allBoxesValid(boardArray));
}

function boardIsSolved(boardArray) {
  return !boardArray.includes("-");
}

function getCellWithLeastPossibilities(boardArray) {

  return // [cellIndex, [1,5,8]]
}

function allRowsValid(boardArray) {
  return [0,9,18,27,36,45,54,63,72]
    .map(el => boardArray.slice(el, el + 9))
    .reduce((validity, row) => { return collectionIsValid(row) && validity }, true);
}

function collectionIsValid(collection) {
  var collectionWithoutBlanks = collection.filter(el => el != "-");
  return collectionWithoutBlanks.length == new Set(collectionWithoutBlanks).size;
}
