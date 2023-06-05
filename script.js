console.log("Welcome to my tic tac toe");
let turnsound = new Audio("Sound Effects - Single keyboard type [FREE].mp3");
let gameoversound = new Audio("CROWD CHEER SOUND EFFECT.mp3");
let music = new Audio("sui - sound effect.mp3");
let turn = "X";
let gameover = false;
// function to change turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// function to cehck win
const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 1.5, 5, 0, 27],
    [3, 4, 5, 1.5, 15, 0, 27],
    [6, 7, 8, 1.5, 25, 0, 27],
    [0, 3, 6, -8.5, 15, 90, 27],
    [1, 4, 7, 1.5, 15, 90, 27],
    [2, 5, 8, 11.5, 15, 90, 27],
    [0, 4, 8, 0.6, 15.5, 45, 30],
    [2, 4, 6, 0.6, 14.5, 135, 30],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + " Won";
      gameover = true;
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = `${e[6]}vw`;
    }
  });
  if (gameover) {
    gameoversound.play();
    document
      .querySelector(".imagebox")
      .getElementsByTagName("img")[0].style.width = "200px";
  }
};

// game Logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      turnsound.play();
      checkWin();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn For " + turn;
      }
    }
  });
});

// reset
let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
  document
    .querySelector(".imagebox")
    .getElementsByTagName("img")[0].style.width = "0px";
  document.querySelector(".line").style.width = "0vw";
  gameoversound.pause();
});
