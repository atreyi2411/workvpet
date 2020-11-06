//Create variables here

var dog;
var database


function preload()
{
  //load images here

dogImage = loadImage("image/dogImg1.png")
dogHappyImage = loadImage("image/dogImg.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage)
  
 // foodStock=database.ref('Food');
  
}


function draw() {  
background (46, 139, 87)
  drawSprites();
  //add styles here

}



