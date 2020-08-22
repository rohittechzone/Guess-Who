var chat,chatbox;
var database;
var messagesent;
//var dani_img,david_img,jim_img,laria_img,sherman_img;
var plr = 0;
var plrnum = 0;
var click = 0;
var click1 = 0;
var gameVar = 0;
var char;
var img;
var dani,david,jim,laria,sherman;
var game;
var textMove = 0;
var startVar = 0;
var playernum = 0;
var opponentChoice = 0;

function preload(){
   dani_img = loadImage('char/Dani.png');
   david_img = loadImage("char/David.png");
   jim_img = loadImage("char/jim.png");
   laria_img = loadImage("char/Laria.png");
   sherman_img = loadImage("char/Sherman.png");
   wrong_img = loadImage("char/wrong.png");
}

function setup(){
   background(0, 128, 128);
   //image(dani_img, 0, 0);
   createCanvas(displayWidth,displayHeight)
   chat = new Chat();
   chatbox = new Chatbox();
   char = new Choose();
   game = new Game();
   database = firebase.database();
   
}
function draw(){
   background(0, 128, 128);
   //console.log(frameCount);
   
   if(click1 === 1){
      fill("yellow");
      rect(displayWidth - 280,0,280,displayHeight);
      fill("Black");
      textSize(18);
      text("(Quick reply)",displayWidth - 160 , displayHeight/2 - 35);
      chatbox.getChoice();
   }
   if(gameVar === 1){
      game.game();
      game.yourChar();
   }
   if(startVar === 1){
      game.start();
   }
   chat.display();
   //image(dani_img, displayWidth - 1150, displayHeight/2 - 300, 125.6, 183.3);
   chatbox.getMessage();
   //console.log(plrnum);
   char.picChoose();
      
   //document.getElementById("image-button").addEventListener("click", doSomething);
}
//document.getElementById("image-button").addEventListener("click", doSomething);

//function doSomething() {
	//alert("Button clicked!");
//}