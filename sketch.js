var chat,chatbox;
var database;
var messagesent;
var plr = 0;
var plrnum = 0;
var click = 0;
function setup(){
   chat = new Chat();
   chatbox = new Chatbox();
   database = firebase.database();
   
}
function draw(){
   chat.display();
   chatbox.getMessage();
   console.log(plrnum);
}