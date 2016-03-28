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
  return // bool
}

function boardIsSolved(boardArray) {

  return // bool
}

function getCellWithLeastPossibilities(boardArray) {

  return // [cellIndex, [1,5,8]]
}
