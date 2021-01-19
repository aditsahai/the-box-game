var canvas;
var music;
var box;
var collison1 , collision2 , collision3 , collision4;
var edge



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1200,800);

    box = createSprite(random(60,1020));
    box.shapeColor = "grey";
    box.velocityY = 1;
    box.scale = 0.3;

    

    collision1 = createSprite(120,400,280,20);
    collision1.shapeColor = "blue";
    

    collision2  = createSprite(420,400,280,20);
    collision2.shapeColor = "red";

    collision3 = createSprite(720,400,280,20);
    collision3.shapeColor = "purple";
  

    collision4 = createSprite(1020,400,280,20);
    collision4.shapeColor = "green";

    edge = createSprite(0,0,3200,10);
    edge.visible = false;
    



}

function draw() {
   background(225);

if(box.isTouching(collision1))
{
box.shapeColor = "blue";
box.velocityY = -1;
music.play();

}

if(box.isTouching(collision3))
{
box.shapeColor = "purple";
box.velocityY = -1;
music.play();

}

if(box.isTouching(collision4)){
 box.shapeColor = "green";
 box.velocityY = -1;
 music.play();

}

if(box.isTouching(collision2)){
   box.shapeColor = "red";
   box.velocityY = 0;
   
   music.stop();


}

if(box.isTouching(edge)){
  box.velocityY = 1;
}

bounceOff();

drawSprites();

}

function bounceOff(){
   
    if (box.y - box.y < box.height/2 + box.height/2 && box.y - box.y < box.height/2 + box.height/2) {
        box.velocityY = box.velocityY * (1);
    
    } 
  } 

 




