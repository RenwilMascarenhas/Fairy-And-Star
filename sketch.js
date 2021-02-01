const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var fairy1, fairy2, star;

function preload()
{
   //preload the images here
   bg = loadImage("starnight.png");
   fairy= loadAnimation("fairy.png");
   fairy1=loadAnimation("fairy1.png");
   fairy2= loadAnimation("fairy2.png");
   star= loadAnimation("star.png");
   joySound= loadSound("joyMusic.mp3");
  
}

function setup() {
  createCanvas(800, 750); 
  engine=Engine.create();
  world=engine.world;
  var star_options={
    restitution:1.0 
   }
   var fairy_options={
     isStatic:false 
   }
   star.x= starBody.position.x
   star.y= starBody.position.y

}

function draw() {
  background("black");
  background(0);

  function keyPressed(){
  }
    if(keyCode === LEFT_ARROW){
       fairy.velocityX = -5;
    }

    if(keyCode === RIGHT_ARROW){
       fairy.velocityY = 5;
}
}
  //drawSprites();

