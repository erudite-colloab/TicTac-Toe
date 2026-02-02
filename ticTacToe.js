//tic-tac toe Game logic
// Gameboard module
// Responsible for storing and updating the game state
// Uses an IIFE to ensure only one board exists
const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""]; //board represented as an array

  //returns the current state of the board
  const getBoard = () => board;
  
  //place a mark ('X' or 'O') at a given index
  const placeMark = (index, mark) => {
    if (board[index] !== "") return false;
    board[index] = mark;
    return true;
  };
  //reset the board to initial state
  const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return { getBoard, placeMark, reset };
})();

//player factory function
//creates player objects with name and mark properties
const Player = (name, mark) => {
  return { name, mark };
};

//Game controller module
//Manages game flow, player turns, win/tie conditions
const GameController = (() => {
  let player1;
  let player2;
  let currentPlayer;
  let gameOver = false;

  //all possible winning combinations
  const winningCombinations = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6],
  ];

  //starts or restarts new game
  const startGame = (name1 = "Player 1", name2 = "Player 2") => {
    player1 = Player(name1, "X");
    player2 = Player(name2, "O");
    currentPlayer = player1;
    gameOver = false;
    Gameboard.reset();
  };

  const getCurrentPlayer = () => currentPlayer;
  const isGameOver = () => gameOver;

//check if current player has won
  const checkWin = () => {
    const board = Gameboard.getBoard();
    return winningCombinations.some(combo =>
      combo.every(i => board[i] === currentPlayer.mark)
    );
  };

  //check for tie
  const checkTie = () => {
    return Gameboard.getBoard().every(cell => cell !== "");
  };

  //switch turns between players
  const switchPlayer = () => {
    currentPlayer = 
        currentPlayer === player1 ? player2 : player1;
  };

  //handles a player's move
  const playRound = (index) => {
    if (gameOver) return "game Over!"

    if (!Gameboard.placeMark(index, currentPlayer.mark)) {
      return "Invalid move, try again.";
    }


    if (checkWin()) {
        gameOver = true;
        return `${currentPlayer.name} wins! 🎉`;
      //console.log(`${currentPlayer.name} wins! 🎉`);
    }

    if (checkTie()) {
        gameOver = true;
        return "It's a tie! 🤝";
       //console.log("It's a tie! 🤝");
    }

    switchPlayer();
    return `It's ${currentPlayer.name}'s turn.`;
  };

//   const restart = () => {
//     Gameboard.reset();
//     currentPlayer = player1;
//     gameOver = false;
//     console.log("Game restarted.");
//     console.log(Gameboard.getBoard());
//   };


  return { 
    startGame,
    playRound,
    getCurrentPlayer,
    isGameOver,
    // restart
   };
})();
// Example usage:
// GameController.playRound(0);
// GameController.playRound(1);
// GameController.playRound(3);
// GameController.playRound(4);
// GameController.playRound(6); // Player 1 wins
// GameController.restart();

//DisplayController module
//handles  all DOM UI updates and user interactions
const DisplayController = (() => {
  const boardElement = document.getElementById("gameboard");
  const statusText = document.getElementById("status");
  const startBtn = document.getElementById("startbtn");

  const p1Input = document.getElementById("player1");
  const p2Input = document.getElementById("player2");

  //renders the Gameboard based on current state
  const renderBoard = () => {
    boardElement.innerHTML = "";

    Gameboard.getBoard().forEach((mark, index) => {
      const square = document.createElement("div");
      square.classList.add("square");
      square.textContent = mark;
      //square.dataset.index = index;

      //add click event to each square
      square.addEventListener("click", () => {
        const message = GameController.playRound(index);
        renderBoard();
        updateStatus(message);
      });

      boardElement.appendChild(square);
    });
  };

    const updateStatus = (message) => {
        if (message) {
            statusText.textContent = message;
        } else {
            statusText.textContent = `It's ${GameController.getCurrentPlayer().name}'s turn.`;
        }
    };

    //start/restart game on button click
    startBtn.addEventListener("click", () => {
        GameController.startGame(
            p1Input.value,
            p2Input.value,
        );
        renderBoard();
        updateStatus();
    });

  return { renderBoard };
})();


GameController.startGame();
DisplayController.renderBoard();
