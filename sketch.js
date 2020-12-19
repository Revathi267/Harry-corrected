
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new Roof(width/2,height/4,width/6,20);
	bobDiameter=40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+100;
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  roofObject.display();
  rope3.display()
  bobObject3.display();
  
  drawSprites();
 
}



