import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const SUITS = [{
    suit: "♦",
    color: "red"
  },
  {
    suit: "♥",
    color: "red"
  },
  {
    suit: "♠",
    color: "black"
  },
  {
    suit: "♣",
    color: "black"
  },]
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  function getRandomSuit(listOfItems) {
    const randomIndex = Math.floor(Math.random() * listOfItems.length);
    return listOfItems[randomIndex];
  }
  const suitPicker = getRandomSuit(SUITS);
  const cardSuits = document.querySelectorAll(".change-suit");
  cardSuits.forEach((cardSuit) => {
    cardSuit.textContent = suitPicker.suit;
  })

  function getRandomNumber(listOfNumbers) {
    const randIndex = Math.floor(Math.random() * listOfNumbers.length);
    return listOfNumbers[randIndex];
  }
  const numberPicker = getRandomNumber(numbers);
  const numberSelector = document.querySelectorAll(".center-value");
  numberSelector.forEach((selectedNumber) => {
    selectedNumber.textContent = numberPicker;
  })

  if (SUITS === "♦" || "♥") {
    cardSuits.forEach((cardSuit) => {
      cardSuit.style.color = suitPicker.color;
    })
  }
  if (numbers === "♦" || "♥") {
    numberSelector.forEach((selectedNumber) => {
      selectedNumber.style.color = suitPicker.color;
    })
  }



  // const colorSuits = document.querySelectorAll(".change-suit");
  // const colorPicker = getRandomSuit(SUITS);
  // if (SUITS.value === "♦" || "♥"){
  //   colorSuit.style.color = colorPicker.color;
  // }
  // colorSuits.forEach((colorSuit) => {
  //  colorSuit.style.color = colorPicker.color;
  // })


};
