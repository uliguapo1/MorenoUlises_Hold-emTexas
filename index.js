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

function dealCards(deck) {
    let hand1 = [deck.pop(), deck.pop()];
    let comunityCards = [];
    for (let i = 0; i < 5; i++) {
        comunityCards.push(deck.pop());
    }
    return { hand1, comunityCards };
}

// Start of the hands value
function rankValue(r) {
    return ranks.indexOf(r);
}

function parseCard(card) {
    const suit = card.slice(-1);
    const rank = card.slice(0, -1);
    return { rank, suit };
}

function countByRank(cards) {
    let counter = {};
    for (let c of cards) {
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

function getFlushCards(cards) {
    const suitCounts = countBySuit(cards);
    for (let s in suitCounts) {
        if (suitCounts[s] >= 5) {
            return cards.filter(c => c.suit === s);
        }
    }
    return [];
}

function hasStraight(cards) {
    const ranks = "23456789TJQKA";
    let values = [...new Set(cards.map(c => ranks.indexOf(c.rank)))].sort((a, b) => a - b);
    for (let i = 0; i < values.length - 4; i++) {
        if (values[i + 4] - values[i] === 4)
            return true;
    }
    return false;
}

function hasStraightFlush(cards) {
    const flushCards = getFlushCards(cards);
    if (flushCards.length < 5) {
        return hasStraight(flushCards);
    }
    return false;
}

function isFourOfAKind(rankCounts) {
    for (let count of Object.values(rankCounts)) {
        if (count === 4) return true;
    }
    return false;
}

function isFullHouse(rankCounts) {
    let hasThree = false;
    let hasTwo = false;
    for (let count of Object.values(rankCounts)) {
        if (count === 3) hasThree = true;
        if (count === 2) hasTwo = true;
    }
    return hasThree && hasTwo;
}

function isThreeOfAKind(rankCounts) {
    for (let count of Object.values(rankCounts)) {
        if (count === 3) return true;
    }
    return false;
}

function isTwoPair(rankCounts) {
    let pairs = 0;
    for (let count of Object.values(rankCounts)) {
        if (count === 2) pairs++;
    }
    return pairs === 2;
}

function isPair(rankCounts) {
    for (let count of Object.values(rankCounts)) {
        if (count === 2) return true;
    }
    return false;
}

function dealerCheck(deck) {
    const hand = deck.map(parseCard);
    const rankCounts = countByRank(hand);

        if (hasStraightFlush(hand)) return "Straight Flush";
        if (isFourOfAKind(rankCounts)) return "Four of a Kind";
        if (isFullHouse(rankCounts)) return "Full House";
        if (hasFlush(hand)) return "Flush";
        if (hasStraight(hand)) return "Straight";
        if (isThreeOfAKind(rankCounts)) return "Three of a Kind";
        if (isTwoPair(rankCounts)) return "Two Pair";
        if (isPair(rankCounts)) return "One Pair";
        return "High Card";
}

let deck = generateDeck();
shuffleDeck(deck);
let game = dealCards(deck);
let fullHand = [...game.hand1, ...game.comunityCards];

console.log("Texas Hold'em Game");
console.log("Player's Hand:", game.hand1);
console.log("Community Cards:", game.comunityCards);
console.log("Hand Value:", dealerCheck(fullHand));

