class Chatbox {
    constructor(){
      this.message = createElement('h3');
      this.message.hide();
      this.message1 = createElement('h3');
      this.message1.hide();
    }
    /*updateName(name){
        var message = "name";
        database.ref(message).set({
          plr1message: messagesent,
        });
        chatbox.getMessage();
      }*/
    updateMessage(messagesent){
      if(plrnum === 1){
      var message = "plr1message";
      database.ref(message).set({
        plr1message: messagesent,
      });
      this.message.html(messagesent);
    }
      else if(plrnum === 2){
        var message = "plr2message";
        database.ref(message).set({
          plr2message: messagesent,
        });
      this.message.html(messagesent);
    }
    
  }

    getMessage(){
        
        this.message1.position(displayWidth - 160, displayHeight/2 - 200);
        this.message.position(displayWidth - 160, displayHeight/2 - 150);
        if(click === 1){
           this.message.show();
           this.message1.show();
           //click = 0;
        }
        if(plrnum === 1){
        var Message = database.ref('plr2message/plr2message');
        Message.on("value",(data)=>{
         // if(send === 1){
          this.message1.html(data.val());// = data.val();
          //}
          //else if(send === 0){
         // this.message1.html(data.val());
         // }
        })
      }
      if(plrnum === 2){
        var Message = database.ref('plr1message/plr1message');
        Message.on("value",(data)=>{
         // if(send === 1){
          this.message1.html(data.val());// = data.val();
          //}
          //else if(send === 0){
         // this.message1.html(data.val());
         // }
        })
      }
    }

    plrUpdate(plrval){
        var plrvalue1 = "player1";
        if(plrnum === 1){
        database.ref(plrvalue1).set({
          player1: plrval,
          //dani = 1
          //david = 2
          //jim = 3
          //laria = 4
          //sherman = 5
        });
      }
      var plrvalue2 = "player2";
      if(plrnum === 2){
        database.ref(plrvalue2).set({
          player2: plrval,
          //dani = 1
          //david = 2
          //jim = 3
          //laria = 4
          //sherman = 5
        });
      }
    }

     clear(clear){
      var message = "plr2message";
      database.ref(message).set({
        plr2message: clear,
      });
      var message = "plr1message";
      database.ref(message).set({
        plr1message: clear,
      });
      chatbox.plrUpdate(0);
      chatbox.updateWin(0);
      end = 0;
     }

     updateName(name){
      
      if(plrnum === 1){
      var player1name = "player1name";
      database.ref(player1name).set({
        player1name: name,
      });
     }
     if(plrnum === 2){
      var player2name = "player2name";
      database.ref(player2name).set({
        player2name: name,
      });
     }
  }
    getChoice(){
      if(plrnum === 1){
      var choice = database.ref('player2/player2');
        choice.on("value",(data)=>{
          opponentChoice = data.val();
          //console.log(opponentChoice);
          
        })
    }
    if(plrnum === 2){
      var choice = database.ref('player1/player1');
        choice.on("value",(data)=>{
          opponentChoice = data.val();
         // console.log(opponentChoice);
       
        })
    }

  }
   updateWin(val){
    if(plrnum === 1){
      var player1win = "player1win";
      database.ref(player1win).set({
        player1win: val,
      });
     }
     else if(plrnum === 2){
      var player2win = "player2win";
      database.ref(player2win).set({
        player2win: val,
      });
     }
   }
   getWin(){
    if(plrnum === 1){
      var player2winstatus = database.ref('player2win/player2win');
      player2winstatus.on("value",(data)=>{
        opponentWinstatus = data.val();
        })
    }
  

    else if(plrnum === 2){
      var player1winstatus = database.ref('player1win/player1win');
      player1winstatus.on("value",(data)=>{
          opponentWinstatus = data.val();
        })
    }
  }
}
