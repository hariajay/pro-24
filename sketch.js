
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ball1,ground1;
var bas1,bas2,bas3;
function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ball1 = new Ball(180,280,25)
     ground1 = new Ground(500,370,1000,15)
     bas1 = new Basket(750,354,170,14)
     bas2 = new Basket(657,316,14,90)
     bas3 = new Basket(843,316,14,90)
 Engine.run(engine);
}
function draw() {
  background(0);
  textSize(24)
  stroke ("yellow")
  strokeWeight(2)
  fill("green")
  text("The Crumpled Balls",140,60)
  textSize(17)
  stroke ("red")
  strokeWeight(1)
  fill("yellow")
  text("click on up arrow to move up",400,45)
  text("click on down arrow to move down",400,63)
 
  ball1.display()
  ground1.display()
  bas1.display()
  bas2.display()
  bas3.display()
  keypressed1()
  keypressed2()
}
function keypressed1(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.Body,ball1.Body.position,{x:1,y:-3})
  }
}
function keypressed2(){
  if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(ball1.Body,ball1.Body.position,{x:1,y:2})
  }
}



