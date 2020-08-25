class Choose{
    constructor(){
       this.title = createElement('h1');
       this.title.hide();

       this.dani = createButton("");
       this.dani.style('background', "url(https://user-images.githubusercontent.com/63205012/91167505-b2d48380-e6f1-11ea-9263-2cd2a92baa4a.png)");
       this.dani.hide();

       this.david = createButton("");
       this.david.style('background', "url(https://user-images.githubusercontent.com/63205012/91167242-435e9400-e6f1-11ea-8184-f71c723791ae.png)");
       this.david.hide();

       this.jim = createButton("");
       this.jim.style('background', "url(https://user-images.githubusercontent.com/63205012/91167546-c1229f80-e6f1-11ea-83e4-8f0101102075.png)");
       this.jim.hide();

       this.laria = createButton("");
       this.laria.style('background', "url(https://user-images.githubusercontent.com/63205012/91167547-c1bb3600-e6f1-11ea-8795-25d6ed1a1b49.png)");
       this.laria.hide();

       this.sherman = createButton("");
       this.sherman.style('background', "url(https://user-images.githubusercontent.com/63205012/91167540-c08a0900-e6f1-11ea-872e-5fbceb157478.png)");
       this.sherman.hide();
    }
    picChoose(){
      this.title.html("Choose Your Character");
      this.title.position(displayWidth/5, displayHeight/2-400);
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

      if(click === 1){
         this.title.show();
         this.dani.show();
         this.david.show();
         this.jim.show();
         this.laria.show();
         this.sherman.show();
      }
     
       this.dani.mousePressed(()=>{
       chatbox.plrUpdate(1);
       playernum = 1;
       this.dani.hide();
       this.david.hide();
       this.jim.hide();
       this.laria.hide();
       this.sherman.hide();
       this.title.hide();
       startVar = 1;
       //gameVar = 1;
       click = 0;
       });

       this.david.mousePressed(()=>{
       chatbox.plrUpdate(2);
       playernum = 2;
       this.dani.hide();
       this.david.hide();
       this.jim.hide();
       this.laria.hide();
       this.sherman.hide();
       this.title.hide();
       startVar = 1;
       //gameVar = 1;
       click = 0;
       });

       this.jim.mousePressed(()=>{
       chatbox.plrUpdate(3);
       playernum = 3;
       this.dani.hide();
       this.david.hide();
       this.jim.hide();
       this.laria.hide();
       this.sherman.hide();
       this.title.hide();
       startVar = 1;
       //gameVar = 1;
       click = 0;
       });

       this.laria.mousePressed(()=>{
       chatbox.plrUpdate(4);
       playernum = 4;
       this.dani.hide();
       this.david.hide();
       this.jim.hide();
       this.laria.hide();
       this.sherman.hide();
       this.title.hide();
       startVar = 1;
       //gameVar = 1;
       click = 0;
       });
       
       this.sherman.mousePressed(()=>{
       chatbox.plrUpdate(5);
       playernum = 5;
       this.dani.hide();
       this.david.hide();
       this.jim.hide();
       this.laria.hide();
       this.sherman.hide();
       this.title.hide();
       //gameVar = 1;
       startVar = 1;
       click = 0;
       });

    }
}
