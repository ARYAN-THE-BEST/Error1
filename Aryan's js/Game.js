class Game{
constructor(){


}

start(){
form = new Form();
form.display();



player=createSprite(683,100,10,10);
player.addImage(playerImg);
player.scale=0.2;
bullet=createSprite(player.x,player.y)
bullet.visible=false
enemy1=createSprite(683,400,10,10);
enemy1.addImage(enemyImg);
enemy1.scale=0.2;
enemy2=createSprite(983,400,10,10);
enemy2.addImage(enemyImg);
enemy2.scale=0.2;
enemy3=createSprite(383,400,10,10);
enemy3.addImage(enemyImg);
enemy3.scale=0.2;
nuclearCode=createSprite(683,580,10,10)
nuclearCode.addImage(nuclearCodeImg)
nuclearCode.scale=0.2;
nuclearCode.velocityX=-5;
border1=createSprite(50,405,5,830);
border1.shapeColor= "black"
border2=createSprite(1310,405,5,830);
border2.shapeColor= "black"
border3=createSprite(683,590,1366,5);
border3.shapeColor= "black"
door1=createSprite(255,100,700,5)
door1.shapeColor="black"
door2=createSprite(1100,100,700,5)
door2.shapeColor="black"




}

play(){
    form.hide();

    player.velocityX=0;
    player.velocityY=0;    

    if(keyWentDown("o")&&direction===3){
        bullet=createSprite(player.x,player.y,4,4)
        bullet.shapeColor="black"
        bullet.velocityX=-10;
        bullet.velocityY=0; 
     }

     if(keyWentDown("p")&&direction===2){
        bullet=createSprite(player.x,player.y,4,4)
        bullet.shapeColor="black"
        bullet.velocityX=10;
        bullet.velocityY=0; 
     }

     if(keyWentDown("k")&&direction===4){
        bullet=createSprite(player.x,player.y,4,4)
        bullet.shapeColor="black"
        bullet.velocityX=0;
        bullet.velocityY=10;       
     }

     if(keyWentDown("l")&&direction===1){
        bullet=createSprite(player.x,player.y,4,4)
        bullet.shapeColor="black"
        bullet.velocityX=0;
        bullet.velocityY=-10; 
     }
    if(keyIsDown(DOWN_ARROW)&&dummyvar===true){
       player.rotation=0
       player.velocityX=0;
       player.velocityY=5;
       direction=4
      }
     

      if(keyIsDown(UP_ARROW)&&dummyvar===true){
        player.rotation=180
        player.velocityX=0;
        player.velocityY=-5;
        direction=1;
       }
       
       if(keyIsDown(RIGHT_ARROW)&&dummyvar===true){
        player.rotation=270
        player.velocityX=5;
        player.velocityY=0;
        direction=2
       }

       if(keyIsDown(LEFT_ARROW)&&dummyvar===true){
        player.rotation=90
        player.velocityX=-5;
        player.velocityY=0;
        direction=3
       }

       player.collide(door1)
       player.collide(door2)
       player.collide(border1)
       player.collide(border2)
       player.collide(border3)
       
            
       if(player.isTouching(enemy1)){
         lifeCount-=1
         console.log()
         player.x=683;
         player.y=100;
      }
      if(player.isTouching(enemy2)){
         lifeCount-=1
         console.log()
         player.x=683;
         player.y=100;
      }
      if(player.isTouching(enemy3)){
         lifeCount-=1
         console.log()
         player.x=683;
         player.y=100;
      }

      if(bullet.isTouching(enemy1)){
         enemy1.destroy();
         bullet.destroy();
      }
      if(bullet.isTouching(enemy2)){
         enemy2.destroy();
         bullet.destroy();
      }
      if(bullet.isTouching(enemy3)){
         enemy3.destroy();
         bullet.destroy();
      }
      

      if(lifeCount===0){
         textSize(90)
         fill("green")
         text("👎 !!GAME OVER!! 👎",230,200)
         text("👎 !!YOU LOSE!!  👎",280,400)
         player.velocityX=0
         player.velocityY=0
         dummyvar=false
         nuclearCode.velocityX=0;
      }

      if(player.isTouching(nuclearCode)){
         textSize(90)
         fill("green")
         text("👍 !!HOORAY!! 👍",340,200)
         text("👍 !!YOU WIN!!👍",350,400)
         player.velocityX=0
         player.velocityY=0
         nuclearCode.velocityX=0
         dummyvar=false;
      }
      if(dummyvar===false){
         player.velocityX=0;
         player.velocityY=0;
           }

         drawSprites();
         textSize(28)
         fill("black")     
         text("CurrentLifeCount : "+lifeCount,90,140)
           
         if(player.isTouching(enemy1)){
            lifeCount-=1
            console.log()
         }
         if(player.isTouching(enemy2)){
            lifeCount-=1
            console.log()
         }
         if(player.isTouching(enemy3)){
            lifeCount-=1
            console.log()
         } 
        
         
         nuclearCode.bounceOff(border1)
         nuclearCode.bounceOff(border2)
       
         
       
}
}