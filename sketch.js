var wall,bullet;
var speed,weight,thickness;
var damge;


function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);	
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
  bullet=createSprite(50, 200, 15, 5);
  bullet.shapeColor="grey";
}

function draw() {
  background("black");     
  drawSprites();
  //bullet.x=mouseX;
  //bullet.y=mouseY;
	bullet.velocityX=speed;
  if(bullet.x>wall.x){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/thickness*thickness*thickness;		
  }
  if(damage>180){
    bullet.shapeColor=color(225,0,0);
  }
  if(damage>80&&damage<180){
    bullet.shapeColor=color(230,230,0);
  }
  if(damage<80){
    bullet.shapeColor=color(0,225,0);
  } 
  text(bullet.x,750,200);
}
 
