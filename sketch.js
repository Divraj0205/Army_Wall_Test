var wall,bullet;
var speed,weight,thickness;
var damage;


function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);	
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
  bullet=createSprite(50, 200, 15, 5);
  bullet.velocityX=speed;
  bullet.shapeColor="grey";
}

function draw() {
  background("black");     
  drawSprites();
  //bullet.x=mouseX;
  //bullet.y=mouseY;
  if(hasColided(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness);		
  }
  if(damage > 10){
    bullet.shapeColor=color(225,0,0);
  }
  if(damage < 10){
    bullet.shapeColor=color(0,225,0);
  } 
  //text(bullet.x,750,200);
}
 
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallleftEdge){
     return true;
     }
  return false;
}

