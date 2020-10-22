// creating the objects
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var box1, box2, box3;
var packageBody,ground;

// making some constant objects
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// loading the images
function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {

	// creating canvas
	createCanvas(800, 700);
	rectMode(CENTER);

	// creating package Sprite and assigning it some values and animations.
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	// creating helicopter Sprite and assigning it some values and animations.
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	// creating ground Sprite and assigning it some values and colour.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	// creating engine and adding objects to it
	engine = Engine.create();
	world = engine.world;

	// creating boxes
	box2 = new Box(300,620,20,100);
	box3 = new Box(490,620,20,100);	
	box1 = new Box(400,649,200,20);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//Create a package
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.05, isStatic:true});
	World.add(world, packageBody);
	
	//Runs the engine
	Engine.run(engine);

}


function draw() {
//displaying the canvas and giving it black colour
  rectMode(CENTER);
  background(0);

//updates the engine
  Engine.update(engine);

// displays the boxes  
  box1.display();
  box2.display();
  box3.display();

//making the packageSprite and packageBody follow each other X & Y Axis
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

// Calling the Keypressed function
  keyPressed(); 

// Makes the display of all the Sprites appear on the screen
  drawSprites();
 
}

// Making a keypressed function
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 	Body.setStatic(packageBody, false);
  }
}