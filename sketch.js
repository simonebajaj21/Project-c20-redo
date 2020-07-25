var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = "gray";
  wall = createSprite(1200, 200, 50, 1000);
  car.collide(wall);

}

function draw() {
  background(0); 
  //stops infront of wall
  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
  
  
var damage = 0.5*weight*speed*speed/22500

  if(damage<100){
    car.shapeColor = "yellow";
  }

  if(damage<180 && damage>100){
   car.shapeColor = "green";
  }

 if(damage>180){
   car.shapeColor = "red";
  }
}
  drawSprites();
}