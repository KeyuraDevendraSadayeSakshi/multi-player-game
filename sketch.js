var database, player, gameState=0, form,playerCount,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game()
  game.getState()
  game.start()
}

function draw(){
 
  
}

