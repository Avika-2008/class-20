var fixedRect,movingRect

function setup() {
  createCanvas(1200,600);
  fixedRect=createSprite(600, 400, 70, 70);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;

  movingRect=createSprite(400,200,70,70);
  movingRect.shapeColor="blue";
  movingRect.debug=true;
}

function draw() {
  background("lightblue"); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2  ){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }

  drawSprites();
}