console.log("Hello, World!");

const Gameboard = (() => {
  let board = ["", "", "",
               "", "", "", 
               "", "", ""];
  
  const getBoard = () => board;

  const setBoard = (index, marker) => {
    if (board[index] === "") {
      board[index] = marker;
      return true;
    }
    else {
      alert("Spot taken!")
      return false;
    }
  };

  const resetBoard = () => {
    board = ["", "", "","", "", "", "", "", ""];
  };

  return {getBoard, setBoard, resetBoard};
})();

const Player = ((name, marker) => {
  const playerName = name;
  const playerMarker = marker;

  const getName = () => playerName;
  const getMarker = () => playerMarker;

  return {getName, getMarker};
})();


const Game = (name1, name2) => {
  // Initialize players
  const player1 = Player(name1, "X");
  const player2 = Player(name2, "O");
  let currentPlayer = player1;

  // Initialize gameboard
  const board = Gameboard();

  // Start or restart game
  const startGame = () => {
    board.resetBoard();
    currentPlayer = player1;
  };

  // Play a turn (playing marker on board)
  const playTurn = (index) => {
    if (board.setBoard(index, currentPlayer.getMarker())) {  // Check if move is valid
      if (checkWin()) {
        console.log(`${currentPlayer.getName()} wins!`);
        return;  // End the game or reset as needed
      }
      if (checkTie()) {
        console.log("It's a tie!");
        return;  // End the game or reset as needed
      }
      switchTurn();  // Move to the next player's turn
    }
  };


};