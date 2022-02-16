var bg,bgimg,snow,snowimg,boy,boyimg,boyobj
function preload(){
  bgimg=loadImage("snow1.jpg")
  snowimg=loadImage("snow4.webp")
  boyimg=loadImage("boy.PNG")
}
function setup() {
  createCanvas(800,400);
  boy =createSprite(600, 300, 10, 10);
  boy.addImage(boyimg)
}

function draw() {
  background(bgimg);
  if(keyDown(UP_ARROW)){
    boy.velocityY=-5
  }  
  if(keyDown(DOWN_ARROW)){
    boy.velocityY=5
  }  
  Createsnow();
  drawSprites();
}
function Createsnow(){
 if(frameCount%10===0){
   snow=createSprite(random(0,800),0,50,50)
   snow.velocityY=4
   snow.velocityX=-2
   snow.addImage(snowimg)
   snow.scale=0.1
 } 
}