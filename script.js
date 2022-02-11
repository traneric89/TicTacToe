let gameStarted = 0;
let playerXTurn = 1;
let winnerArrayX = [
  ["X", "X", "X"],
  ["X", "X", "X"],
  ["X", "X", "X"],
];
let winnerArrayO = [
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
let gameArray = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const playerTurn = (index) => {
  if (playerXTurn) {
    document.getElementById(`cell${index}`).innerHTML = "X";
    gameArray[Math.floor(index / 3)][index % 3] = "X";
    playerXTurn = 0;
    console.table(gameArray);
  } else {
    document.getElementById(`cell${index}`).innerHTML = "O";
    gameArray[Math.floor(index / 3)][index % 3] = "O";
    playerXTurn = 1;
    console.table(gameArray);
  }
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
};

const gameCheck = () => {};
