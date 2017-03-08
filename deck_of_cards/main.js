// Assignment IV: Deck of Cards
// Create a Deck object constructor. A deck should have the following functionality:

//The Deck should contain the 52 standard cards
//The Deck should be able to shuffle
//The Deck should be able to reset
//The Deck should be able to deal a random card
//Deal should return the card that was dealt and remove it from the deck

//Create a Player object constructor. A Player should have the following functionality:
//The Player should have a name
//The Player should have a hand
//The Player should be able to take a card (use the deck.deal method)
//The Player should be able to discard a card

// Create the Deck constructor function
function Deck(){
  // When Deck constructor funtion is invoked, run the buildDeck prototype method to populate deck with cards
  this.buildDeck();
}

// You don't want your prototype method inside your constructor. It would be very ineffcient to have to make a new object every time you wanted something from the Prototype
Deck.prototype.buildDeck = function(){
    var suits = ['diamonds', 'clubs',  'spades', 'hearts'];
    var values = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
    // Get a snapshot of 'this' for use in callback function
    var self = this;

    this.cards = [];

    var suits = ["hearts", "clubs", "diamonds", "spades"]
    var values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
    var count = 0;
    while (count < 52){
        // Use Math.floor and Math.random to generate random index to access character from suits and values arrays
        var card_suit = suits[Math.floor(Math.random()*4)];
        var card_value = values[Math.floor(Math.random()*13)];
        newcard = card_value + " of " + card_suit;
        if (self.cards.includes(newcard) == false) {
            self.cards.push(newcard);
            count++;
        }
    }
    return this;    // So you can chain together method calls
}

Deck.prototype.shuffle = function(){
  // Used https://bost.ocks.org/mike/shuffle/ for shuffle logic
  var unshuffledEdge = this.cards.length,
      cardToShuffleIdx,
      temp;

  // While there remain elements to shuffle…
  while (unshuffledEdge > 0) {
    // Pick an element in the unshuffled portion…
    cardToShuffleIdx = Math.floor(Math.random() * unshuffledEdge);
    // Move the unshuffledEdge closer to front of array
    unshuffledEdge -= 1;

    // And swap the chosen card to the back
    temp = this.cards[cardToShuffleIdx]
    this.cards[cardToShuffleIdx] = this.cards[unshuffledEdge]
    this.cards[unshuffledEdge] = temp;
  }
  return this
}

Deck.prototype.reset = function(){
    this.buildDeck().shuffle();  // builds a new in-order deck and shfufles it
}

Deck.prototype.dealRandomCard = function(){
// deals last card in the deck
  return (this.cards.length > 0) ? this.cards.pop() : null; // The turnery operator ? tells the code to return this.cards.pop() if the this.cards.length > 0 expression returns true, and null if it returns false
}

function Card(value, suit){
        this.value = value;
        this.suit = suit;
}

function Player(name){
        this.name = name;
        this.hand = [];
}

Player.prototype.takeCard = function(deck){
    // takeCard receives a deck then pulls a card from it to add to the player's hand
    this.hand.push(deck.dealRandomCard());
    return this;
}

Player.prototype.discard = function(cardIndx){
    if (this.hand.length > cardIndx){
        this.hand.splice(cardIndx, 1); //
    }
    return this;
}


var dan = new Player("Dan");
var deck1 = new Deck();
deck1.buildDeck();
deck1.shuffle();
dan.takeCard(deck1);
console.log(dan);

// // deck1.createDeck();
