let cards = [];
const titleEl = document.getElementById("title");
const startEl = document.getElementById("start-game");
const newCardEl = document.getElementById("new-card");
const player = document.querySelector(".player-info");
const sumEl = document.getElementById("sumEl");
const cardsEl = document.getElementById("cards");
let playerName = prompt("Player name");
let chips = prompt("number of chips");
let sum = 0;
let isAlive = false;
let haveBlackjack = false;

let message = "";
//code
player.textContent = playerName + " " + "$" + chips;

startEl.addEventListener("click",function(){
    if(sum === 0){
        startGame();
    }

});

newCardEl.addEventListener("click",function (){
    if(isAlive && !haveBlackjack){
        newCard();
    }
});

function startGame(){
    isAlive = true;
    let firstCard = randomNumber();
    let secondCard = randomNumber();
    cards = [firstCard,secondCard];
    sum += firstCard + secondCard;
    render();
}

function render (){
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum < 21){
        message =  "Do you want a new Card?";
    }else if (sum === 21){
        message = "Wohoo! You've gote Blackjack!!!";
        haveBlackjack = true;
        sum = 0;
    }else if(sum > 21){
        isAlive = false;
        message = "You lose :(";
        sum = 0;
    }
    titleEl.textContent = message;
};



function randomNumber (){
    return Math.floor(Math.random() * 10 ) + 2;
};


function newCard (){
    let newC = randomNumber();
    sum += newC;
    cards.push(newC);
    render();

}


