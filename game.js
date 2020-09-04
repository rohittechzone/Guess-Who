class Game{
    constructor(){
       //this.yourchar = createButton("");
       this.title = createElement('h1');
       this.title1 = createElement('h1');
       //this.title.hide();

       this.dani = createButton("");
       this.dani.style('background', "url(https://user-images.githubusercontent.com/63205012/91167505-b2d48380-e6f1-11ea-9263-2cd2a92baa4a.png)");
       //this.dani.hide();

       this.david = createButton("");
       this.david.style('background', "url(https://user-images.githubusercontent.com/63205012/91167394-828ce500-e6f1-11ea-89e9-3316433335b4.png)");
       //this.david.hide();

       this.jim = createButton("");
       this.jim.style('background', "url(https://user-images.githubusercontent.com/63205012/91167546-c1229f80-e6f1-11ea-83e4-8f0101102075.png)");
       //this.jim.hide();

       this.laria = createButton("");
       this.laria.style('background', "url(https://user-images.githubusercontent.com/63205012/91167547-c1bb3600-e6f1-11ea-8795-25d6ed1a1b49.png)");
       //this.laria.hide();

       this.sherman = createButton("");
       this.sherman.style('background', "url(https://user-images.githubusercontent.com/63205012/91167540-c08a0900-e6f1-11ea-872e-5fbceb157478.png)");
       //this.sherman.hide();

       this.restart = createButton("");
       this.restart.style('background', "url(https://user-images.githubusercontent.com/63205012/92231941-457fda00-eecb-11ea-8a3e-aad19cd67ebc.png)");
       this.restart.hide();
    }

    game(){
      this.title.html("Eleminate the Characters by asking");
      this.title.position(displayWidth/5, displayHeight/2-400);
      this.title1.html("'Yes' or 'No' questions with the chatbox!!");
      this.title1.position(displayWidth/5, displayHeight/2-360);

      this.dani.position(displayWidth/6,displayHeight/2 - 300);
      this.dani.size(125.6,183.3);
      this.david.position(displayWidth/6 + 180,displayHeight/2 - 300);
      this.david.size(125.6,183.3);
      this.jim.position(displayWidth/6 + 360,displayHeight/2 - 300);
      this.jim.size(125.6,183.3);
      this.laria.position(displayWidth/6 + 90,displayHeight/2 - 80);
      this.laria.size(125.6,183.3);
      this.sherman.position(displayWidth/6 + 270,displayHeight/2 - 80);
      this.sherman.size(125.6,183.3);

      this.restart.position(displayWidth/2-125, displayHeight/5);
      this.restart.size(250,75);

      this.restart.mousePressed(()=>{
         chatbox.clear("");
         location.reload();
       });

        this.dani.mousePressed(()=>{
         this.dani.hide();
        });
 
        this.david.mousePressed(()=>{
         this.david.hide();
        });
 
        this.jim.mousePressed(()=>{
         this.jim.hide();
        });
 
        this.laria.mousePressed(()=>{
         this.laria.hide();
        });
        
        this.sherman.mousePressed(()=>{
         this.sherman.hide();
        });
        if(hide === 1){
            this.dani.hide();
            this.david.hide();
            this.jim.hide();
            this.laria.hide();
            this.sherman.hide();
            this.title.hide();
            this.title1.hide();
            this.restart.show();
        }
    }
    start(){
        //setTimeout(function(){ 
            textMove = textMove+10;
        // }, 1);
        textSize(85);
        fill("yellow");
        text("Start", textMove, displayHeight/2);
        if(textMove > displayWidth){
            gameVar = 1;
            startVar = 0;
        }
    }
    yourChar(){
        if(playernum === 1){
            image(dani_img, displayWidth - 200,displayHeight/12,94.75,137.75);
        }
        if(playernum === 2){
            image(david_img, displayWidth - 200,displayHeight/12,94.75,137.75);
        }
        if(playernum === 3){
            image(jim_img, displayWidth - 200,displayHeight/12,94.75,137.75);
        }
        if(playernum === 4){
            image(laria_img, displayWidth - 200,displayHeight/12,94.75,137.75);
        }
        if(playernum === 5){
            image(sherman_img, displayWidth - 200,displayHeight/12,94.75,137.75);
        }
       
    }
  
}
