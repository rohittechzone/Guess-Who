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

function preload(){
   dani_img = loadImage('char/Dani.png');
   david_img = loadImage("char/David.png");
   jim_img = loadImage("char/jim.png");
   laria_img = loadImage("char/Laria.png");
   sherman_img = loadImage("char/Sherman.png");
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
   if(click1 === 1){
      rect(displayWidth - 280,0,280,displayHeight);
   }
   if(gameVar === 1){
      game.display();
   }
   chat.display();
   //image(dani_img, displayWidth - 1150, displayHeight/2 - 300, 125.6, 183.3);
   chatbox.getMessage();
   console.log(plrnum);
   char.picChoose();
   //document.getElementById("image-button").addEventListener("click", doSomething);
}
//document.getElementById("image-button").addEventListener("click", doSomething);

//function doSomething() {
	//alert("Button clicked!");
//}