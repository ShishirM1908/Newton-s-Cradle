var ball,platform;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var chain1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
platform=new Ground();
ball= new Paper(400,200,20); 
ball1=new Paper(460,200,20);
ball2=new Paper(500,200,20);
ball3=new Paper(560,200,20);
ball4=new Paper(380,200,20);
chain1=new Chain(ball.body,{x:400,y:50})
chain2=new Chain(ball1.body,{x:440,y:50})
chain3=new Chain(ball2.body,{x:480,y:50})
chain4=new Chain(ball3.body,{x:520,y:50})
chain5=new Chain(ball4.body,{x:360,y:50})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  platform.display();
  drawSprites();
 ball.display();
 ball1.display();
 chain1.display();
 chain2.display();
 chain3.display();
 ball2.display();
 ball3.display();
 ball4.display();
 chain4.display();
 chain5.display();
}

function Movement(){
    if(keyDown(LEFT_ARROW)){
		Matter.Body.setVelocity(ball3.body, {x:-10, y:0});
	  }
}


