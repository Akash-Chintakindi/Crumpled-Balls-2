/* var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground */
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var paper;
var bin;

function preload(){
	
}

function setup() {
	createCanvas(800, 550);

	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,height,800,20);
	 
	paper = new Paper(100,350,30);

	bin = new Bin(650,530);

	Engine.run(engine);
  
}


function draw()	 {
  rectMode(CENTER);
  background(255);

  ground.display();
  paper.display();
  bin.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-170});

	}
}


