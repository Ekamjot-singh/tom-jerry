var cat, mouse, garden;
var gardenImg;
var catImg1,catImg2,catImg3;
var mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("catSleeping",catImg1);
    cat.scale=0.1;
    
    mouse=createSprite(200,700);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.1;
}

function draw() {
    background(gardenImg);

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    //Write condition here to evalute if tom and jerry collide
    cat.velocityX=0;
    cat.addAnimation("catLastImg",catImg3);
    cat.x=300;
    cat.scale=0.1;
    cat.changeAnimation("catLastImg");

    mouse.addAnimation("mouseLastImg",mouseImg3);
    mouse.scale=0.1;
    mouse.changeAnimation("mouseLastImg");
}


    drawSprites();
}


function keyPressed(){
   if(keyCode === LEFT_ARROW){
       cat.velocityX=-5;
       cat.addAnimation("catRunning",catImg2);
       cat.changeAnimation("catRunning");

       mouse.addAnimation("mouseTeasing",mouseImg2);
       mouse.changeAnimation("mouseTeasing");

      
       
       text(mouseX + ',' + mouseY, 10, 45);
   }

}
