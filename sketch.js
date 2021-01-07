var paperObject;

var ground1;

var bin1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);
   
  engine = Engine.create();
	world = engine.world;

  paperObject = new paper(120,640,30);
  
  ground1=new ground(width/2,670,width,20);  

  bin1 = new bin(1100, 583, 20, 150);
  bin2 = new bin(1210, 647, 200, 20);
  bin3 = new bin(1300, 583, 20, 150);

	Engine.run(engine);
  
}


function draw() {
   rectMode(CENTER);
   background(0);

   paperObject.display();
   ground1.display();
   bin1.display();
   bin2.display();
   bin3.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-50});
	 }
   }