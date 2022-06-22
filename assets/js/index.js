let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackjack;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newCardEl = document.getElementById("new-card");

let player = {
    name : prompt("what is your name"),
    chips  : prompt("number of chips in game")
}
let playerName = document.getElementById("player-el");
playerName.textContent = player.name + ": $" + player.chips;
let start = document.getElementById("start-game").addEventListener("click", function () {
    if(sum === 0){

        startGame();
    }
});
newCardEl.addEventListener("click", function () {
    newCard();
})



function startGame(){
    isAlive = true;
    hasBlackjack = false;
    let firstCard = getRanomCard();
    let secondCard = getRanomCard();
    cards = [firstCard,secondCard];
    sum += firstCard + secondCard;
    renderGame();
}
function renderGame(){
    cardsEl.textContent = "Cards: " 
    for(let i =0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent ="Sum: " + sum;
    if(sum <= 20){
        message = "Do you want to draw a new card ?";
    }else if (sum === 21){
        message = "Wohoo! You've got Blackjack!";
        hasBlackjack = true;
        sum = 0;
    }else{
        message = "You're out of the game!";
        isAlive = false;
        sum = 0;
    }
    messageEl.textContent = message;
}
function newCard(){
    if(isAlive === true && hasBlackjack === false){

        let newC = getRanomCard();
        sum += newC;
        cards.push(newC);
        renderGame();
    }
}

function getRanomCard(){
    let randCards = Math.floor( (Math.random() * 13 ) + 1);
    if(randCards > 10){
        return 10;
    }else if(
        randCards === 1 
    ){
        return 11;
    }else{
        return randCards
        
    }
}


































