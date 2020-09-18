var wall,bullet;
var speed,weight,thickness;
var damage;
var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);	
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
  bullet=createSprite(50, 200, 15, 5);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
}

function draw() {
  background("black");     
  drawSprites();
  //bullet.x=mouseX;
  //bullet.y=mouseY;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);		
  }
  if(damage > 10){
    wall.shapeColor=color(225,0,0);
    stroke("red");
    textSize(100);
    text("Rejected",600,200);
  }
  if(damage < 10){
    wall.shapeColor=color(0,225,0);
    stroke("green");
    textSize(100);
    text("Pass",700,200);
  } 
  //text(bullet.x,750,200);
}
 
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
     return true;
    
     }
  return false;
  
}
