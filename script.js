let gameStarted = 0;
let playerXTurn = 1;
let arrayX = [];
let arrayO = [];
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
    // console.table(gameArray);
    // console.log(arrayX);
  } else if (!playerXTurn && gameArray[Math.floor(index / 3)][index % 3] == 0) {
    document.getElementById(`cell${index}`).innerHTML = "O";
    gameArray[Math.floor(index / 3)][index % 3] = `O${index}`;
    arrayO.push(index);
    winCheck();
    playerXTurn = 1;
    // console.table(gameArray);
    // console.log(arrayO);
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

const winCheck = () => {
  let sortedCellsX = arrayX
    .sort((a, b) => a - b)
    .toString()
    .replace(/,/g, "");
  let sortedCellsO = arrayO
    .sort((a, b) => a - b)
    .toString()
    .replace(/,/g, "");

  console.log(sortedCellsO);
  console.log(sortedCellsX);

  if (playerXTurn == 1) {
    if (sortedCellsX.length <= 3) {
      winAlgo(sortedCellsX);
    } else if (sortedCellsX.length == 4) {
      //   console.log(sortedCellsX);
      winAlgo(sortedCellsX.substring(0, 3));
      //   console.log(sortedCellsX.substring(0, 2));
      winAlgo(sortedCellsX.substring(1, 3));
      //   console.log(sortedCellsX.substring(1, 3));
    } else if (sortedCellsX.length == 5) {
      winAlgo(sortedCellsX.substring(0, 3));
      winAlgo(sortedCellsX.substring(1, 3));
      winAlgo(sortedCellsX.substring(2, 3));
    }
  } else {
    if (sortedCellsO.length <= 3) {
      winAlgo(sortedCellsO);
    } else if (sortedCellsO.length == 4) {
      winAlgo(sortedCellsO.substring(0, 3));
      winAlgo(sortedCellsO.substring(1, 3));
    }
  }
};

const winAlgo = (toCheck) => {
  winConditions.forEach((condition) => {
    if (toCheck === condition) {
      console.log("winner found!");
    }
  });
};
