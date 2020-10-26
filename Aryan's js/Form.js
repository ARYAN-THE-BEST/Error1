class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.title = createElement('h1');
      this.story = createElement('h3')
      this.bol=createElement('h2')
      
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.story.hide();
      this.bol.hide();
    }
  
    display(){
      this.title.html("TIME TO SAVE THE WORLD");
      this.title.position(500, 0);
      this.title.style('color','black');

      this.input.position(620 , displayHeight/2 - 80);
      this.button.position(690, displayHeight/2);
   

      this.button.mousePressed(()=>{
        this.button.hide();
        this.input.hide();

        this.story.html("You are part of an elite team of soldiers . The enemy has attained the nuclear codes to  a weapon that can be used to destroy entire countries within minutes . He plans to use it to rule the entire world . Your team has been captured . Now it is all up to you to save the world. You have to work your way through the maze to the nuclear codes . On the way you will encounter his mutant bodygaurds , if you touch them you lose one life . You have 5 lives when you lose all your lives , GAME OVER . Use arrow keys to move .")
        this.story.position(displayWidth/10-50,250) 

         
        this.bol.html("BEST OF LUCK!!")
        this.bol.position(635,400)
         
        var sm = createButton('Start Mission')
        sm.position(685,500)

        sm.mousePressed(()=>{
           
          this.story.hide();
          this.bol.hide();
          sm.hide();
          game.play();
          gamestate=1
          
        })

      })
    }
  }
  