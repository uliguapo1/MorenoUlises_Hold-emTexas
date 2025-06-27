const suits = ["♠", "♣", "♦", "♥"]; 
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function generateDeck() {
    const deck = [];
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push( rank + suit );
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealCards (deck){
    let hand1 = [deck.pop(), deck.pop()];
    let table = [];
    for (let i = 0; i < 5; i++) {
        table.push(deck.pop());
    }
    return { hand1, table };
}

let deck = generateDeck();
shuffleDeck(deck);
let game = dealCards(deck);