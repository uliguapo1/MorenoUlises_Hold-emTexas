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

// Start of the hands value
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

function hasFlush(cards) {
    const suitCounts = countBySuit(cards);
    for (let s in suitCounts) {
        if (suitCounts[s] >= 5) {
            return true;
        }
    }
    return false;
}

function getFlushCards(cards){
    const suitCounts = countBySuit(cards);
 for (let s in suitCounts){
    if (suitCounts[s] >= 5){
        return cards.filter(c => c.suit === s);
    }
 }
return [];
}

function hasStraight(cards) {
    const ranks = "23456789TJQKA";
    let values = [...new Set(cards.map(c => ranks.indexOf(c.rank)))].sort((a, b) => a - b);
    for (let i = 0; i < values.length - 4; i++) {
        if (values [i + 4] - values[i] === 4) 
            return true;
        }    
        return false;
    }

function hasStraightFlush(cards) {
 const flushCards = getFlushCards(cards);
    if (flushCards.length < 5) {
        return hasStraight (flushCards);
    }
    return false;
}

function hasFourOfAKind(rankCounts) {
    return Object.values(rankCounts).includes(4);
}



console.log("Texas Hold'em Game");
console.log("Player's Hand:", game.hand1);
console.log("Community Cards:", game.comunityCards);

