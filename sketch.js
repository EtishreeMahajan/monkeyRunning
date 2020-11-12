var monkey ,monkey_running
var banana,bananaImage;
var obstacle,obstacleImage;
var ground;
var survivalTime = 0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(450,450);

  monkey = createSprite(50,350,50,50);
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(20,350,450,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
}

function draw() {
  background("");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  text("Survival Time : "+survivalTime,100,100);
  
  if(keyDown("space") && monkey.y>=200){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if(ground.x <230){
    ground.x = ground.width/2
  }
  
  Banana();
  
  spawnObstacle();
  
  drawSprites();
}

function Banana(){
  if(frameCount%80 === 0){
    banana = createSprite(450,20,20,20)
    banana.y = Math.round(random(120,200))
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 120;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth+1;
  } 
}

function spawnObstacle(){
  if(frameCount%300 === 0){
    obstacle = createSprite(450,326,20,20);
    obstacle.velocityX = -4;
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 120;
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth+1;
  }
}

