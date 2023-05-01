// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/

function allocateShips(shipPositions, initialBoard) {

  for (i = 0; i < shipPositions.length; i++){
    initialBoard[shipPositions[i][0]][shipPositions[i][1]] = "S";
  }

return initialBoard;

}

function checkGuesses(guesses, mountedBoard){

  for (i = 0; i < guesses.length; i++){
    if(mountedBoard[guesses[i][0]][guesses[i][1]] === "S"){
      mountedBoard[guesses[i][0]][guesses[i][1]] = "X";
    }
  }
  
return mountedBoard;

}

function checkWinCondition(guessesBoard){

  for (i = 0; i < guessesBoard.length; i++){
    for (j = 0; j < guessesBoard[i].length; j++){
      if (guessesBoard[i][j] === "S"){
        return false;
      }
    } 
  }

 return true;

}

allocateShips();
checkGuesses();
checkWinCondition();