class Chat {

    constructor() {
      this.chattitle = createElement('h1');
      this.chattitle.hide();
      this.player1 = createButton('');
      this.player1.style('background', "url(https://user-images.githubusercontent.com/63205012/91166709-68063c00-e6f0-11ea-8214-127e6ccc5ef7.png)");
      this.player2 = createButton('');
      this.player2.style('background', "url(https://user-images.githubusercontent.com/63205012/91167728-152d8400-e6f2-11ea-9a3b-8373715e0055.png)");
      this.rules = createButton('How to Play');
      
      this.input = createInput("Your Message...");
      this.input.hide();
      this.name = createInput("Enter Your Name");
      this.name.hide();
      this.button = createButton('Send');
      this.button.hide();
      this.yes = createButton('Yes');
      this.yes.hide();
      this.no = createButton('No');
      this.no.hide();
      //this.button.size(100,200);
      this.submit = createButton('');
      this.submit.style('background', "url(https://user-images.githubusercontent.com/63205012/91167808-31312580-e6f2-11ea-96ef-8c22d88ef9b4.png)");
      this.submit.hide();
      this.you = createElement('h3');
      this.you.hide();
      this.opponent = createElement('h3');
      this.opponent.hide();

      this.dani = createButton('Dani');
      this.dani.hide();
      this.david = createButton('David');
      this.david.hide();
      this.jim = createButton('Jim');
      this.jim.hide();
      this.laria = createButton('Laria');
      this.laria.hide();
      this.sherman = createButton('Sherman');
      this.sherman.hide();
    }
  
    display(){
      this.you.html("You : ");
      this.chattitle.html("Chat Box");
      this.opponent.html("Opponent : ");
      this.opponent.position(displayWidth - 260, displayHeight/2 - 200);
      this.you.position(displayWidth - 260, displayHeight/2 - 150);
      this.chattitle.position(displayWidth - 220, 10);
      this.input.position(displayWidth - 260 , displayHeight/2 - 80);
      this.name.position(displayWidth/2-125, displayHeight/2 - 80);
      this.name.size(240,20);
      this.button.position(displayWidth - 260, displayHeight/2 - 50);
      this.yes.position(displayWidth - 260 , displayHeight/2);
      this.no.position(displayWidth - 200 , displayHeight/2);
      this.submit.position(displayWidth/2-125, displayHeight/2);
      this.submit.size(250,75);
      this.player1.position(displayWidth/2-125, displayHeight/2-150);
      this.player1.size(250,75);
      this.player2.position(displayWidth/2-125, displayHeight/2);
      this.player2.size(250,75);
      this.rules.position(displayWidth - 220, 10);
      this.rules.size(150,75);
      this.dani.position(displayWidth - 260, displayHeight/2+50);
      this.david.position(displayWidth - 260, displayHeight/2+80);
      this.jim.position(displayWidth - 260, displayHeight/2+110);
      this.laria.position(displayWidth - 260, displayHeight/2+140);
      this.sherman.position(displayWidth - 260, displayHeight/2+170);

      //this.button2.position();
      if(gameVar === 1){
        this.dani.show();
        this.david.show();
        this.jim.show();
        this.laria.show();
        this.sherman.show();
        fill("Black");
        text("Your Final Guess :",displayWidth - 260, displayHeight/2 + 40);
     }
     this.rules.mousePressed(()=>{
      location.replace("http://guess-who-rules.rohit.technology/")
    });
      this.player1.mousePressed(()=>{
        plrnum = 1;
        this.name.show();
        this.submit.show();
        this.player1.hide();
        this.player2.hide();
        this.rules.hide();
        chatbox.clear("");
        //chatbox.plrUpdate(1);
      });
      this.player2.mousePressed(()=>{
        plrnum = 2;
        this.name.show();
        this.submit.show();
        this.player1.hide();
        this.player2.hide();
        this.rules.hide();
        chatbox.clear("");
        //chatbox.plrUpdate(2);
      });
      
      this.yes.mousePressed(()=>{
        chatbox.updateMessage("Yes");
      });
      this.no.mousePressed(()=>{
        chatbox.updateMessage("No");
      });

      this.submit.mousePressed(()=>{
        chatbox.updateName(this.name.value());
        this.name.hide();
        this.submit.hide();
        //send = 1;
        this.input.show();
        this.button.show();
        this.yes.show();
        this.no.show();
        this.you.show();
        this.opponent.show();
        click1 = 1;
        click = 1;
        fill("Yellow");
        
        this.chattitle.show();
       //plr = 1;
       //chatbox.plrUpdate(plrnum);
      });
      
    
  //    this.button2.mousePressed(()=>{
 //       chatbox.getMessage();
 //     });
      this.button.mousePressed(()=>{
        chatbox.updateMessage(this.input.value());
        
      });
  
        this.dani.mousePressed(()=>{
          if(opponentChoice === 1){
            end = 1;
           // console.log(end);
          }
          else{
            wrongVar = 1;
          }

        });
 
        this.david.mousePressed(()=>{
          if(opponentChoice === 2){
            end = 1;
           // console.log(end);
          }
          else{
            wrongVar = 1;
          }

        });
 
        this.jim.mousePressed(()=>{
          if(opponentChoice === 3){
            end = 1;
           // console.log(end);
          }
          else{
            wrongVar = 1;
            //console.log(wrongVar);
          }

        });
 
        this.laria.mousePressed(()=>{
          if(opponentChoice === 4){
            end = 1;
            //console.log(end);
          }
          else{
            wrongVar = 1;
          }

        });
        
        this.sherman.mousePressed(()=>{
          if(opponentChoice === 5){
            end = 1;
            //console.log(end);
          }
          else{
            wrongVar = 1;
          }

        });
  
    }
  }
