var arco ,scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score =0;
var vermlhoG, verdeG, azulG, rosaG, flechaG;


function preload(){  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
  
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  
  arco = createSprite(380,220,20,50);
  arco.addImage(bowImage); 
  arco.scale = 1;
  
  score = 0  
  vermelhoG= new Group();
  verdeG= new Group();
  azulG= new Group();
  rosaG= new Group();
  flechaG= new Group();  
}

function draw() {
 background(0);

  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
  
  arco.y = World.mouseY
  
  
  if (keyDown("space")) {
    criarflecha();  
  }
  
  
  var escolherbalao = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (escolherbalao == 1) {
      Bvermelho();
    } else if (escolherbalao == 2) {
      Bverde();
    } else if (escolherbalao == 3) {
      Bazul();
    } else if (escolherbalao == 4) {
      Brosa();
    }


  }
  
  if (flechaG.isTouching(vermelhoG)) {
    
    vermelhoG.destroyEach();
    
    
    flechaG.destroyEach();
    score=score+1;
  }

  if (flechaG.isTouching(verdeG)) {
    verdeG.destroyEach();
    flechaG.destroyEach();
    score=score+3;
  }

  if (flechaG.isTouching(azulG)) {
    azulG.destroyEach();
    flechaG.destroyEach();
    score=score+2;
  }

  if (flechaG.isTouching(rosaG)) {
    rosaG.destroyEach();
    flechaG.destroyEach();
    score=score+1;
  }

  drawSprites();
  text("Pontuação: "+ score, 300,50);
}

function Bvermelho() {
  var vermelhoV = createSprite(0,Math.round(random(20, 370)), 10, 10);
  vermelhoV.addImage(red_balloonImage);
  vermelhoV.velocityX = 3;
  vermelhoV.lifetime = 150;
  vermelhoV.scale = 0.1;
  vermelhoG.add(vermelhoV);
}

function Bazul() {
  var azulV = createSprite(0,Math.round(random(20, 370)), 10, 10);
  azulV.addImage(blue_balloonImage);
  azulV.velocityX = 3;
  azulV.lifetime = 150;
  azulV.scale = 0.1;
  azulG.add(azulV);
}

function Bverde() {
  var verdeV = createSprite(0,Math.round(random(20, 370)), 10, 10);
  verdeV.addImage(green_balloonImage);
  verdeV.velocityX = 3;
  verdeV.lifetime = 150;
  verdeV.scale = 0.1;
  verdeG.add(verdeV);
}

function Brosa() {
  var rosaV = createSprite(0,Math.round(random(20, 370)), 10, 10);
  rosaV.addImage(pink_balloonImage);
  rosaV.velocityX = 3;
  rosaV.lifetime = 150;
  rosaV.scale = 1;
  rosaG.add(rosaV);
}



 function criarflecha() {
  var flechaV= createSprite(100, 100, 60, 10);
  flechaV.addImage(arrowImage);
  flechaV.x = 360;
  flechaV.y=arco.y;
  flechaV.velocityX = -4;
  flechaV.lifetime = 100;
  flechaV.scale = 0.3;
  flechaG.add(flechaV);
  
  
}
