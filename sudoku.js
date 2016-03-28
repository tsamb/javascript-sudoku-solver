var TEST_BOARD = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--".split("");

function solve(boardString) {
  var boardArray = boardString.split("");
  if (boardIsInvalid(boardArray)) { return false }
  if (boardIsSolved(boardArray)) { return boardString }
  var nextUnsolvedCellIndex, possibilities;
  [nextUnsolvedCellIndex, possibilities] = getCellWithLeastPossibilities(boardArray);
  for (var i = 0; i < possibilities.length; i++) {
    boardArray[nextUnsolvedCellIndex] = possibilities[i];
    var solvedBoard = solve(boardArray.join(""));
    if (solvedBoard) { return solvedBoard }
  }
  return false;
}

function boardIsInvalid(boardArray) {
  return !boardIsValid(boardArray);
}

function boardIsValid(boardArray) {
  return (allRowsValid(boardArray) && allColumnsValid(boardArray) && allBoxesValid(boardArray));
}

function boardIsSolved(boardArray) {
  return !boardArray.includes("-");
}

function getCellWithLeastPossibilities(boardArray) {
  var choicesCollection = [];
  boardArray.forEach((value, i) => {
    if (value === "-") {
      var existingValues = getAllIntersections(boardArray, i);
      var choices = ["1","2","3","4","5","6","7","8","9"].filter(num => !existingValues.includes(num));
      choicesCollection.push([i, choices]);
    }
  });
  return choicesCollection.sort((a,b) => a[1].length - b[1].length)[0];
}

function getAllIntersections(boardArray, i) {
  return [...new Set([...getRow(boardArray, i), ...getColumn(boardArray, i), ...getBox(boardArray, i)])];
}

function allRowsValid(boardArray) {
  return [0,9,18,27,36,45,54,63,72]
    .map(i => getRow(boardArray, i))
    .reduce((validity, row) => { return collectionIsValid(row) && validity }, true);
}

function getRow(boardArray, i) {
  var startingEl = Math.floor(i / 9) * 9;
  return boardArray.slice(startingEl, startingEl + 9);
}

function allColumnsValid(boardArray) {
  return [0,1,2,3,4,5,6,7,8]
    .map(i => getColumn(boardArray, i))
    .reduce((validity, row) => { return collectionIsValid(row) && validity }, true);
}

function getColumn(boardArray, i) {
  var startingEl = Math.floor(i % 9);
  return [0,1,2,3,4,5,6,7,8].map(num => boardArray[startingEl + (num * 9)]);
}

function allBoxesValid(boardArray) {
  return [0,3,6,27,30,33,54,57,60]
    .map(i => getBox(boardArray, i))
    .reduce((validity, row) => { return collectionIsValid(row) && validity }, true);
}

function getBox(boardArray, i) {
  var boxCol = Math.floor(i / 3) % 3;
  var boxRow = Math.floor(i / 27);
  var startingIndex = (boxCol * 3) + (boxRow * 27);
  return [0,1,2,9,10,11,18,19,20].map((num) => boardArray[startingIndex + num]);
}

function collectionIsValid(collection) {
  var collectionWithoutBlanks = collection.filter(el => el != "-");
  return collectionWithoutBlanks.length == new Set(collectionWithoutBlanks).size;
}

function toString(boardArray) {
  var output = "";
  var boardCopy = boardArray.slice();
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      output += boardCopy.shift();
      output += " ";
    }
    output += "\n";
  }
  console.log(output);
}
