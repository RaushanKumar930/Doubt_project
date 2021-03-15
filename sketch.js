
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4
var chain1, chain2, chain3, roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
  
  roof = new Roof(425,350,800,20)

// Mam please don't mind I was just doing the trial, so the positions are different

bob1 = new Bob(350,250,50)
bob2 = new Bob(400,250,50)
bob3 = new Bob(450,250,50)
bob4 = new Bob(500,450,50)

chain1 = new Chain(bob1,roof)
//chain2 = new Chain(bob2,roof)
//chain3 = new Chain(bob3,roof)
//chain4 = new Chain(bob4,roof)


}


function draw() {
  rectMode(CENTER);
  background(300);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  roof.display()
 chain1.display()
//chain2.display()
//chain3.display()
//chain4.display()
  
  drawSprites();
 
}



