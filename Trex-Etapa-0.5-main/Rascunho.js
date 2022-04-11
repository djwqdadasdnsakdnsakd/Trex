var trex, trex_running, edges;
var ground, invisbleGround, groundImage;
var cloud, CloudGroup, cloudImage; 
var obstacleGroup,cactus1,cactus2,cactus3,cactus4,cactus5,cactus6;


function preload(){
  trex_runnig = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("nuvem.png");
  cactus1 = loadImage("cactus.png");
  cactus2 = loadImage("cactus4.png");
  cactus3 = loadImage("cactusgigante.png");
  cactus4 = loadImage("cactus3.png");
  cactus5 = loadImage("cactus2.png");
  cactus6= loadImage("cactus6.png");
}

function setup(){

createCanvas(600,200);

trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_runnig);
trex.scale = 0.5;
trex.x = 50
//edges = createEdgeSprites();
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
invisbleGround = createSprite(200,190,400,10);
invisbleGround.visible = false;
}

function draw (){
background("white");

console.log(trex.y);

if(keyDown("space")&& trex.y >= 100){
  trex.velocityY = -10;


}

trex.velocityY = trex.velocityY + 0.5;
if(ground.x <0){
  ground.x = ground.width/2;
}


trex.collide(invisbleGround);

spawnObstacles();
nuvens ();
drawSprites();
}

function nuvens (){
if(frameCount % 60 ===0){
cloud = createSprite (600,100,40,10);
cloud.velocityX = -3;
cloud.addImage("cloud",cloudImage);
cloud.y = Math.round(random(10,60));
cloud.scale = 0.4;

//ajustando a profundidade da nuvem
cloud.depth = trex.depth;
trex.depth = trex.depth +1;
}
}

function spawnObstacles(){
  if(frameCount % 60 ===0){
  var obstacle = createSprite(400,125,10,40);  
  obstacle.velocityX = -6;
  //gerar obstaculos aleatórios.
  var rand = Math.round(random(1,6));
  switch(rand){
    case 1:
    obstacle.addImage(cactus1); 
    break;
    case 2:
    obstacle.addImage(cactus2); 
    break;  
    case 3:
    obstacle.addImage(cactus3); 
    break;
    case 4:
    obstacle.addImage(cactus4); 
    break;
    case 5:
      obstacle.addImage(cactus5); 
      break;
      case 6:
        obstacle.addImage(cactus6); 
        
        break; 
        default:
        break;  
      }

obstacle.scale = 0.5;
obstacle.lifetime = 300;    }
}



































































































































































































































































































































































































































































































































































































































