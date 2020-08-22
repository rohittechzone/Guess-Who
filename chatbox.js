class Chat {

    constructor() {
      this.chattitle = createElement('h1');
      this.chattitle.hide();
      this.player1 = createButton('');
      this.player1.style('background', "url(https://lh3.googleusercontent.com/uBYTizxwyOhYQ0vnxh03dtHWbI-X1e8T9lKbEDsKlnZBMpp17AlRzhEv5bvshb6S8fYCelOlpJVBP-LKs6VKG0j_mJG-hC3VBM8XgcUQK_Jfknw1Pq9IgqaEoP1LGrKd0Fo1WmfaEIT17Bz2_P1dY2kIdevzNSaOb2noQHub45G6gWyXLgZJuNYbwLUdYTQu20qGekQ8lasjTQ15Xuq5g5PkhNcH_IQyr-waI1LsTYBeQYFNBvfiFe1Q4S2AS1oNKjm8BfxOchwMa_UQfXX0b0lOnTz41iiub3htFk4zohvWtTee4XnZ-w1bdtp3SpA2S-zC9-o3rLgtTe0zLkgmqp9mqRH36Wz0iHlywKQLgBw1JvTyXVQ_RSG_Th8hjikzAWgiZLiA3hJW5nKQriX_osdbtID7o259ZMgVW6P44iiUO3sYl2fv9_cOEp5mDsw3Xh5GIEiwLCDWqJQoyeRJnvWcgnJNVC8rFFmDeyhxlye3_PLd4IKMx4V43S8xSNHZgSup0OrNonnBwDxP7CEyN0WLC4KI5XfmQh1WBqjO0sgjDRzG2zLZudWkgZPwPSatZa_2R34n4kcZZNyfR7UDi9JsZESIK-Jab1G670vHs_q82JH3utMYFi8DiWNJqZTEYrTApcmaUteezY2X3eu51_EipFCZZsQgxOv4VwnusOLbMhVz6lbE4WuSsSge9A=w250-h75-no?authuser=0)");
      this.player2 = createButton('');
      this.player2.style('background', "url(https://lh3.googleusercontent.com/0ggZiES4xKotpcl5kchPrkEeOE7TLk9uL45cl0O2qMdHpz_kd-PrQr9FjHa8eVTMKZiju2hbP-wN840kUlAroXZPQwTsykuGIGsIENKTsMnbIApfZdHOZiFoEGRZPDr5EgP-1MIvOWFPDcXpQI9jpAhrkVtkMMbnnSeum9eDh_vvkxmqFboyPJEqFt7ZCJnsyk_upfzMraJbxzuX30QqGCtw3cW-lcOQcMXAM3W9RS-GV_h9tDPTQTrBELs9KBLCbGOhOI9SwVWZHGQWoIi9kq_AAhSdRLoshXU4ze8-5dX-CXRlYng8ELWaZu6-lN6m5CenhBOZG3fMLdOzYqvk-dTjxCMgUQnHYgLvRNlyRc6eEZvU9SrLoPKHq2EHWf5MQPzwwPhb71HC9m_z_KGbAonl_Djylon8ri1sqA7pZTnNV0YXoVZ1Z9oYmJkvb7nMdTWuqpsMdq50KJPUQ5S7Ni8e2lsxazObNEynoHfCleM1OLQeLN6vYf6R2NUxh05S9B-Ex-tBsyzXGMACvcLVh7CmI-wkc1ckVhVlpbmTDSvcZLCknF7-VRtKCsGww1daTyzsgK4gjPXRrHruM3Q7o5aIj7siISCY37D82CfsHbDpBkcWL1DctOhNRuFsA-APumAisJ5gsact33al8i2B8r3ioGrWphUrkKeToJPmThO9nXlzAGh6tj7a0DlhMQ=w250-h75-no?authuser=0)");

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
      this.submit.style('background', "url(https://lh3.googleusercontent.com/sO7imKpVYjVXFVTnl8DJ0ZCEETD4QwMAKxVx9YKQocgbambU-FACwHK_TWbChhHKynUB7SwRApCulQA0ik77z9zz8CO81pCvSMOXvqk9vGhHWkk9_-xsQHCJxyrIfzDyoTwmVra-kLNyibK3gcmrLb_WwEeQR_w3ZUgE20dxWYUIphhTcQwm74EWAjFIqUu6vzEQbRnW9grOSfsDTmWAwMAdOv9v8izIBN2N0rTSVj89-qhWhdzhSih-38cBqrWlsAEa4QEgLBGoOwqp6ZMdo5FwlJaCpw51L0Kt2g9fq4pkhtEvVLiESlxy-JiYpP3ELP9zGzhjHA5BFtVzasubtoXf9NLmkS-5iwhXkdilDMSnvs1V2yktX7lBBcTu266CFKX4GPBj0tyunBHC6ncs9I-ialCQxHb77IFcf9D3I360xX21_r4UkAPn9uk0SBlRdfYEFeIf_e1VTpTXvRALUH60v4Cz1FeAydO_U03VhPyD5l4QHE-6C-7j43MJnSY6LrOCMmYUMO4R8jyl8UKlFKVX9DapzNx04cdkTV1uUWXFm7d6vH3LZ9OECGIQzFh3_lXBSQFN-5ECHrwQ9XPPoS0AWDZJr_GjjOPZdQ34ufS06pSsSlJ3fhCGnaUIepzRfOINkvdOp5eni_nctw3raVxVOm_OxyzrCNe3bVUjJgQPHESGZJZZoo9RjSaQfA=w250-h75-no?authuser=0)");
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
      this.button.position(displayWidth - 260, displayHeight/2);
      this.yes.position(displayWidth - 260 , displayHeight/2 - 50);
      this.no.position(displayWidth - 200 , displayHeight/2 - 50);
      this.submit.position(displayWidth/2-125, displayHeight/2);
      this.submit.size(250,75);
      this.player1.position(displayWidth/2-125, displayHeight/2-150);
      this.player1.size(250,75);
      this.player2.position(displayWidth/2-125, displayHeight/2);
      this.player2.size(250,75);
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
      this.player1.mousePressed(()=>{
        plrnum = 1;
        this.name.show();
        this.submit.show();
        this.player1.hide();
        this.player2.hide();
        chatbox.clear("");
        //chatbox.plrUpdate(1);
      });
      this.player2.mousePressed(()=>{
        plrnum = 2;
        this.name.show();
        this.submit.show();
        this.player1.hide();
        this.player2.hide();
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
  
      
  
    }
  }