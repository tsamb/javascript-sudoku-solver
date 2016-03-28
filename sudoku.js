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

}

function rowValid(row) {
  var rowWithoutblanks = row.filter(el => el != "-");
  return rowWithoutblanks.length == new Set(rowWithoutblanks).size
}
