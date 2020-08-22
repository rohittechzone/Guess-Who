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
        var plrvalue = "plr";
        database.ref(plrvalue).set({
          player: plrval,
          //dani = 1
          //david = 2
          //jim = 3
          //laria = 4
          //sherman = 5
        });
        
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
}
