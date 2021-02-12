const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var ground,box,box2,box3,box4,box5,log,log2,log3,log4;
var pig,pig2,bird;

function setup() {
  createCanvas(1200,690);
  engine = Engine.create();
  world = engine.world;
  var option = {
    isStatic:true
  }
  ground = Bodies.rectangle(600,690,1200,20,option);
  console.log(box);
  World.add(world,ground);

  box=new Box(700,320);
  box2=new Box(920,320);
  pig =new Pig(810,360);
  box3=new Box(700,240);
  box4=new Box(920,240);
  pig2=new Pig(810,220);
  bird =new Bird(0,0);
  log =new Log(810,260,300,PI/2);
  log2 =new Log(810,170,300,PI/2);
  box5 =new Box(810,170);
  log3 =new Log(760,120,150,PI/4);
  log4 =new Log(870,120,150,PI/-4)
 
}

function draw() {
  
  background(0);
  Engine.update(engine);
  
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y, 1200,20);

  box.display();
  box2.display();
  box3.display();
  box4.display();
  pig.display();
  pig2.display();
  bird.display();
  log.display();
  log2.display();
  log3.display();
  log4.display();
  box5.display();
}