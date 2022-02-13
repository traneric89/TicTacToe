const overlay = document.querySelector(".overlay");
const winnerDiv = document.querySelector(".winner");

let gameStarted = 0;
let playerXTurn = 1;
let arrayX = [];
let arrayO = [];
let sortedCellsX = "";
let sortedCellsO = "";
let gameArray = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let winConditions = ["012", "345", "678", "036", "147", "258", "048", "246"];

const playerTurn = (index) => {
  if (playerXTurn && gameArray[Math.floor(index / 3)][index % 3] == 0) {
    document.getElementById(`cell${index}`).innerHTML = "X";
    gameArray[Math.floor(index / 3)][index % 3] = `X${index}`;
    arrayX.push(index);
    winCheck();
    playerXTurn = 0;
  } else if (!playerXTurn && gameArray[Math.floor(index / 3)][index % 3] == 0) {
    document.getElementById(`cell${index}`).innerHTML = "O";
    gameArray[Math.floor(index / 3)][index % 3] = `O${index}`;
    arrayO.push(index);
    winCheck();
    playerXTurn = 1;
  }
};

const playGame = () => {
  overlay.style.opacity = 1;
  winnerDiv.style.visibility = "hidden";
  restartGame();
};

const restartGame = () => {
  let max = 0;
  while (max <= 8) {
    document.getElementById(`cell${max}`).innerHTML = "";
    max++;
  }
  playerXTurn = 1;
  gameArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  arrayX = [];
  arrayO = [];
};

const winCheck = () => {
  sortedCellsX = arrayX
    .sort((a, b) => a - b)
    .toString()
    .replace(/,/g, "");
  sortedCellsO = arrayO
    .sort((a, b) => a - b)
    .toString()
    .replace(/,/g, "");
  if (playerXTurn == 1) {
    winAlgo(sortedCellsX);
  } else {
    winAlgo(sortedCellsO);
  }
};

const winAlgo = (toCheck) => {
  winConditions.forEach((condition) => {
    for (let i = 0; i < toCheck.length; i++) {
      for (let j = 1; j < toCheck.length - 1; j++) {
        let possibleCombination =
          toCheck.charAt(i) + toCheck.charAt(j) + toCheck.charAt(j + 1);
        if (possibleCombination == condition) {
          overlay.style.opacity = 0.1;
          winnerDiv.style.visibility = "visible";
          gameArray = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
          ];
        }
      }
    }
  });
};
