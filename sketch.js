var form,game;
var border1,border2,border3;
var door1,door2 ;
var gamestate=0;
var player,playerImg;
var enemy1,enemy2,enemy3,enemyImg;
var bullet;
var direction;
var wall1,wall2,wall3,wall4; 
var lifeCount=5;
var nuclearCode,nuclearCodeImg;
var dummyvar=true;

function preload(){
    playerImg=loadImage("Images/Player.png");  
    enemyImg=loadImage("Images/Enemy.png"); 
    nuclearCodeImg=loadImage("Images/NuclearCode.png")
}
function setup() {
  canvas = createCanvas(1366,615);
  game = new Game();
  game.start();
  
}

function draw() {
background("red")
if(gamestate===1){
  game.play()
}
}