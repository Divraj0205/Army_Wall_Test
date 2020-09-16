var wall,car;
var speed,weight;



function setup() {
	createCanvas(1600,400);
	speed=random(55,90);
	weight=random(400,1500);
	car=createSprite(50, 200, 50, 20);
	car.velocityX=speed;
	wall=createSprite(1500,200,60,height/2);
}

function draw() {
	background("black");  
	drawSprites();

	if(wall.x-car.x < (wall.width+car.widht)/2){
		car.velocityX=0;
		car.velocityY=0;
		deformation();
	}

	text(mouseX+' '+mouseY,750,200);
}
   
function deformation(){
	var deformation=0.5*weight*speed*speed/22500;
		if(deformation>180){
			car.shapeColor="red";
		}
		if(deformation>80&&deformation<180){
			car.shapColor="yellow";
		}
		if(deformation<80){
			car.shapColor="green";
	  }
}