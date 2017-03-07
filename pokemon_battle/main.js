// Pokemon game
var game = {
  players: [],
  addPlayer: function(){}
};
function playerConstructor(name){
  player = {};
  player.name = name;
  player.hand = [];
  player.addCard = function(card){
      player.hand.push(card);
  };
  return player;
};


var my_player = playerConstructor("Dan");
console.log(my_player);
my_player.addCard("Pichachu");
console.log(my_player);

// my_player.push();
