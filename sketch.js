var tw,twImg;
var door,doorImg,doorsGroup;
var cm,cmImg,cmGroup;
var ghost,ghostImg;
var ib,ibG;
var sound;
var gameState="PLAY";
function preload(){
twImg=loadImage("tower.png");  
doorImg=loadImage("door.png");  
cmImg=loadImage("climber.png"); 
ghostImg=loadImage("ghost-standing.png");  
sound=loadSound("spooky.wav")  
  
}
function setup(){
createCanvas(600,600);
 //sound.loop(); 
tw=createSprite(300,300);  
tw.addImage("tower",twImg);  
tw.velocityY=1;  

doorsGroup=new Group();  
cmGroup=new Group();  
ibG=new Group();
  
ghost=createSprite(200,200,50,50);  
ghost.addImage("ghost",ghostImg);  
ghost.scale=0.3;  
}
function draw(){
background("black");  

if(gameState==="PLAY"){
  
  
  
if(tw.y>400){
  tw.y=300;
}  
if(keyDown("Left_Arrow")){
  ghost.x=ghost.x-3;
}  
if(keyDown("Right_Arrow")){
  ghost.x=ghost.x+3;
}  
if(keyDown("space")){
 ghost.velocityY=-6;
}  
ghost.velocityY=ghost.velocityY+0.4;
if(cmGroup.isTouching(ghost)){
  ghost.velocityY=0;
}
if(ibG.isTouching(ghost)||ghost.y>600){
  ghost.destroy();
  gameState="END";
}
  spawnDoors();
drawSprites();
}
if(gameState==="END"){
  fill("yellow");
  textSize(30);
  text("gameOver",230,250);
}  
  
  
  
}

function spawnDoors(){
 if(frameCount%240===0){
   door=createSprite(200,-50);
   door.addImage("door",doorImg);
   cm=createSprite(200,10);
   cm.addImage("climber",cmImg);
   
   ib=createSprite(200,15);
   ib.width=cm.width;
   ib.height=2;
   
   door.x=Math.round(random(120,400));
   door.velocityY=1;
   cm.x=door.x;
   cm.velocityY=1;
   
   ib.x=door.x;
   ib.velocityY=1;
   ib.lifetime=800;
   
   ghost.depth=door.depth;
   ghost.depth+=1;
   
   door.lifetime=800;
   cm.lifetime=800;
   
   ib.debug=true;
   
   ibG.add(ib);
   doorsGroup.add(door);
   cmGroup.add(cm);
   
   
 }  
  
  
  
  
  
}


