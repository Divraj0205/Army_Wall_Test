var wall,bullet;
var speed,weight,thickness;
var damge;


function setup() {
	createCanvas(1600,400);
	speed=random(223,321);
  weight=random(30,52);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
  bullet=createSprite(50, 200, 10, 5);
  bullet.velocityX=speed;
  bullet.shapeColor="grey";
}

function draw() {
	background("black");  
	drawSprites();
//car.x=mouseX;
//car.y=mouseY;
	if(bullet.x>wall.x){
		bullet.velocityX=0;
		damage=0.5*weight*speed*speed/thickness*thickness*thickness;
		
  }
  if(damage>180){
    bullet.shapeColor=color(225,0,0);S
  }
  if(damage>80&&deformation<180){
    bullet.shapeColor=color(230,230,0);
  }
  if(damage<80){
    bullet.shapeColor=color(0,225,0);
  }
	//text(car.x,750,200);
}
