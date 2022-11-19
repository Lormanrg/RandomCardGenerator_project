/* eslint-disable */
// import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let number = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "R", "J", "A"];
let cards = ["♣", "♥", "♦", "♠"];
cards;
window.onload = function() {
  //write your code here
  let random_numbers = number[Math.floor(Math.random() * number.length)];
  let random_card = cards[Math.floor(Math.random() * cards.length)];

  // document.querySelector(".row").innerHTML = `${
  //   values[Math.floor(Math.random() * values.length)]
  // }`;
  document.querySelector(".top-suit").innerHTML = random_card;
  document.querySelector(".bottom-suit").innerHTML = random_card;
  document.querySelector(".number").innerHTML = random_numbers;
  if (
    document.querySelector(".top-suit").innerHTML &&
    document.querySelector(".bottom-suit").innerHTML == "♥"
  ) {
    document.querySelector(".top-suit").classList.add("red");
    document.querySelector(".bottom-suit").classList.add("red");
  }
};
