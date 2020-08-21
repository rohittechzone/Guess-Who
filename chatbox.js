class Chat {

    constructor() {
      this.player1 = createButton('Player 1');
      this.player2 = createButton('Player 2');
      this.input = createInput("Your Message...");
      this.input.hide();
      this.name = createInput("Enter Your Name");
      this.name.hide();
      this.button = createButton('Send');
      this.button.hide();
      this.button1 = createButton('Submit');
      this.button1.hide();
      this.you = createElement('h3');
      this.you.hide();
      this.opponent = createElement('h3');
      this.opponent.hide();
    }
  
    display(){
      this.you.html("You : ");
      this.opponent.html("Opponent : ");
      this.opponent.position(displayWidth/2 - 40, displayHeight/2 - 200);
      this.you.position(displayWidth/2 - 40, displayHeight/2 - 170);
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.name.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.button1.position(displayWidth/2 + 30, displayHeight/2);
      this.player1.position(displayWidth/2 + 30, displayHeight/2);
      this.player2.position(displayWidth/2 + 30, displayHeight/2 + 40);
      //this.button2.position();
      this.player1.mousePressed(()=>{
        plrnum = 1;
        this.name.show();
        this.button1.show();
        this.player1.hide();
        this.player2.hide();
        chatbox.clear("");
        //chatbox.plrUpdate(plrnum);
      });
      this.player2.mousePressed(()=>{
        plrnum = 2;
        this.name.show();
        this.button1.show();
        this.player1.hide();
        this.player2.hide();
      });
      
      
      this.button1.mousePressed(()=>{
        this.name.hide();
        this.button1.hide();
        //send = 1;
        this.input.show();
        this.button.show();
        this.you.show();
        this.opponent.show();
        click = 1;
       //plr = 1;
        chatbox.plrUpdate(plrnum);
      });
      
    
  //    this.button2.mousePressed(()=>{
 //       chatbox.getMessage();
 //     });
      this.button.mousePressed(()=>{
        chatbox.updateMessage(this.input.value());
        
      });
  
      
  
    }
  }