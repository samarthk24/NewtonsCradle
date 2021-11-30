
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(320,250,40,20);
	bob1 = new bob(320,575,40)

	roof2 = new roof(360,250,40,20);
	bob2 = new bob(360,575,40)

	roof3 = new roof(400,250,40,20);
	bob3 = new bob(400,575,40)

	roof4 = new roof(440,250,40,20);
	bob4 = new bob(440,575,40)

	roof5 = new roof(480,250,40,20);
	bob5 = new bob(480,575,40)
	
	rope1=new rope(bob1.body,roof1.body,-80)
	rope2=new rope(bob2.body,roof2.body,-40)
	rope3=new rope(bob3.body,roof3.body,0)
	rope4=new rope(bob4.body,roof4.body,40)
	rope5=new rope(bob5.body,roof5.body,80)
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("lightgreen");

  noStroke();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  stroke("blue");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  
  bob3.display();
  bob4.display();
  bob5.display();
}


//WRITE A CORRECT CODE TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  bob1.hforce()
  
	}
}
