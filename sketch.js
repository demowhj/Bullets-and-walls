var thickness, wall;
var bullet, speed, weight;
var damage = 0;

function setup() {
  createCanvas(1600, 400);

  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);
  
  bullet = createSprite(50, 200, 20, 50);
  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  bullet.velocityX = speed;
}

function draw() {
  background(0);  

  if(bullet.x + bullet.width < wall.x){
    bullet.velocityX = 0;

    damage = 0.5 * weight * speed * speed /(thickness * thickness * thickness);

    if(damage >= 10){
      wall.shapeColor = "red";
    }
    if(damage < 10){
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}