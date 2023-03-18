let mainbtn = document.querySelectorAll(".button-option");
let restart = document.querySelector("#restart");
let newGame = document.querySelector("#new-game");
let popup = document.querySelector(".popup");

// wining pattern
// display X or O on click logic
//win logic
//function for win
//function for draw
//function for new game

let winingPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnX = true;
count = 0;

mainbtn.forEach((el) => {
  el.addEventListener("click", () => {
    if (turnX) {
      turnX = false;
      el.innerText = "O";
      el.disabled = true;
    } else {
      turnX = true;
      el.innerText = "X";
      el.disabled = true;
    }
    count++;
    checkWin();
    if (count == 9) {
      //draw function da ubacim
      drawFunc();
    }
  });
});

const winFunc = function () {
  mainbtn.document.querySelectorAll(".button-option").disabled = true;
};
const drawFunc = function () {
  alert("DRAW");
};

const checkWin = function () {
  for (const condition of winingPattern) {
    const [a, b, c] = condition;
    if (
      mainbtn[a].innerText &&
      mainbtn[a].innerText === mainbtn[b].innerText &&
      mainbtn[a].innerText === mainbtn[c].innerText
    ) {
      alert("pobeda");
      winFunc();
      return [a, b, c];
    }
  }
  return false;
};
