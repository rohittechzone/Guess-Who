var chat,chatbox;
var database;
var messagesent;
var dani_img,david_img,jim_img,laria_img,sherman_img,wrong_img,cup_img,over_img;
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
var wrongVar = 0;
var end = 0;
var winMove,overMove;
var hide = 0;
var opponentWinstatus = 0;
function preload(){
   dani_img = loadImage('char/Dani.png');
   david_img = loadImage("char/David.png");
   jim_img = loadImage("char/jim.png");
   laria_img = loadImage("char/Laria.png");
   sherman_img = loadImage("char/Sherman.png");
   wrong_img = loadImage("char/wrong.png");
   cup_img = loadImage("char/cup.png");
   over_img = loadImage("char/over.png");
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
   winMove = displayHeight+450;
   overMove = displayHeight+375;
}
function draw(){
   background(0, 128, 128);
   //console.log(frameCount);
   //image(wrong_img, displayWidth/2 - 149.3, displayHeight/2 - 170.5,298.6,341.3);
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
   chatbox.getWin();
   wrong();
   win();
   opponentWin();
   console.log(opponentWinstatus);
      //console.log(wrongVar);
   //document.getElementById("image-button").addEventListener("click", doSomething);
}
//document.getElementById("image-button").addEventListener("click", doSomething);

//function doSomething() {
	//alert("Button clicked!");
//}
function wrong(){
  if(wrongVar === 1){
   image(wrong_img, displayWidth/2 - 149.3, displayHeight/2 - 170.5,298.6,341.3);
   setTimeout(function(){ 
      wrongVar = 0;
    }, 1000);
    //wrongVar = 0;
  }
}
function win(){
   if(end === 1){
      chatbox.updateWin(1);
      hide = 1;
      if(winMove>displayHeight/2-225){
      winMove = winMove-10;
      }
      else if(winMove>displayHeight/2-225){
      winMove = winMove;
      }
      image(cup_img, displayWidth/2 - 150, winMove,300,450);
   }   
}
function opponentWin(){
   if(winMove>displayHeight/2-187.5){
      overMove = overMove-10;
      }
   else if(winMove>displayHeight/2-225){
      overMove = overMove;
      } 
   if(opponentWinstatus === 1){
      image(over_img, displayWidth/2 - 333, overMove,666,375);
   }
}