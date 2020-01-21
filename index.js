//
// Blackjack Game
//
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 
            'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

// Grab DOM elements
let textArea = document.getElementById('textArea');
let newGameButton = document.getElementById('newGameButton');
let hitButton = document.getElementById('hitButton');
let stayButton = document.getElementById('stayButton');	

// Hide hit/stay buttons at beginning of game
hitButton.style.display = 'none'; 
stayButton.style.display = 'none';

// Add click event listener to new game button
newGameButton.addEventListener('click', function() {
  // Change text
  textArea.innerText = 'Started...';
  //Change button views
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
});

function createDeck() {
    let deck = []; // creates empty deck
    // Loop to create the deck
    for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
        for (let valueIndex = 0; valueIndex < values.length; valueIndex ++) {
            let card = {
                suit: suits[suitIndex],
                value: values[valueIndex]
            };
            deck.push(card);
        }
    }
    return deck;
}

function getCard(card) {
    return card.value + ' of ' + card.suit; 
};

// Function draws next card from the deck.
function getNextCard() {
    return deck.shift(); // Array shift method grabs the first item in the array and moves the remaining        
                         // items up in the array
}

let deck = createDeck(); //Calls create deck function to set up new deck.
let playerCards = [getNextCard(), getNextCard()]; // Draw cards from the deck
console.log("Welcome to Blackjack!");
console.log("You are dealt: ");
console.log("  " + getCard(playerCards[0]));
console.log("  " + getCard(playerCards[1]));