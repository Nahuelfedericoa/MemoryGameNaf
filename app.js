const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById("grid");
const resultDisplay = document.getElementById("result");
let cardChosen = [];
let cardChosenId = [];
const cardsWin = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const OptionOneId = cardChosenId[0];
  const OptionTwoId = cardChosenId[1];

  if (cardChosen[0] === cardChosen[1]) {
    console.log(cards);
    cards[OptionOneId].setAttribute("src", "images/white.png");
    cards[OptionTwoId].setAttribute("src", "images/white.png");
    cards[OptionOneId].removeEventListener("click", flipCard);
    cards[OptionTwoId].removeEventListener("click", flipCard);
    cardsWin.push(cardChosen);
  } else {
    cards[OptionOneId].setAttribute("src", "images/blank.png");
    cards[OptionTwoId].setAttribute("src", "images/blank.png");
  }
  resultDisplay.textContent = cardsWin.length;
  cardChosen = [];
  cardChosenId = [];

  if (cardsWin.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations!!";
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
