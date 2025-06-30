const suits = ["♠", "♣", "♦", "♥"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function generateDeck() {
    let deck = [];
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push(rank + suit);
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
    let comunityCards = [];
    for (let i = 0; i < 5; i++) {
        comunityCards.push(deck.pop());
    }
    return { hand1, comunityCards };
}

// let deck = generateDeck();
// shuffleDeck(deck);
// let game = dealCards(deck);
// let gametest = [...game.comunityCards, ...game.hand1]
// console.log("Game Test:", gametest);

function rankValue (r) {
return ranks.indexOf(r);
}

function parseCard(card) {
    const suit = card.slice(-1);     
    const rank = card.slice(0, -1);   
    return { rank, suit };
}

function countByRank (cards) {
    let counter = {};
    for ( let c of cards){
        counter[c.rank] = (counter[c.rank] || 0) + 1;
    }
    return counter;
}

function countBySuit(cards) {
    let counter = {};
    for (let c of cards) {
        counter[c.suit] = (counter[c.suit] || 0) + 1;
    }
    return counter;
}

    
console.log("Texas Hold'em Game");
console.log("Player's Hand:", game.hand1);
console.log("Community Cards:", game.comunityCards);
console.log(dealerCheck(game));
