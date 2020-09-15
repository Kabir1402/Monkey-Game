
var monkey , monkey_running
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() { 
  createCanvas(400,400);
  
  monkey= createSprite(50, 300, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
ground = createSprite(300, 300, 800, 20);
ground.velocityX = -4;
ground.x = ground.width/2;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
background("white");
monkey.collide(ground);

  
if(keyDown("space") && monkey.y >= 250){
  monkey.velocityY = -12
}

if (ground.x>0) {
  ground.x = ground.width/2
}

monkey.velocityY = monkey.velocityY+0.8

  food();
  obstacles();
  
drawSprites();
}

function obstacles(){
  if (frameCount % 300 === 0) {
  var obstacle = createSprite(600, 270, 80, 80);
  obstacle.addImage("stone", obstacleImage);
    obstacle.scale = 0.1;
  obstacle.velocityX = -4;
  obstacle.lifetime = 150;
  obstacleGroup.add(obstacle)
  }
}

function food(){
  if(frameCount % 80 === 0){
  var banana = createSprite(600, 200, 10, 20);
  banana.y = Math.round(random(120,200))
  banana.addImage("banana", bananaImage);
    banana.scale = 0.1
  banana.velocityX = -4;
  banana.lifetime = 150;
  FoodGroup.add(banana);
}
}