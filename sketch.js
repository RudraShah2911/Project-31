const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var engine, world;
var wall1, wall2, wall3, wall4, wall5;
var plinko = []
var particle = []
var wall = []


function preload() {
  
}

function setup() {
  createCanvas(600,600);
  engine = Engine.create()
  world = engine.world
  ground = new Ground (300,580,600,20)

  /*wall1 = new Wall (100, 470, 5, 200)
  wall2 = new Wall (200, 470, 5, 200)
  wall3 = new Wall (300, 470, 5, 200)
  wall4 = new Wall (400, 470, 5, 200)
  wall5 = new Wall (500, 470, 5, 200)*/

  for (var j = 40 ; j < width ; j = j + 70){
    plinko.push(new Plinko (j, 75, 10))
  }

  for (var j = 60 ; j < width ; j = j + 70){
    plinko.push(new Plinko (j, 135, 10))
  }

  for (var j = 40 ; j < width ; j = j + 70){
    plinko.push(new Plinko (j, 195, 10))
  }

  for (var j = 60 ; j < width ; j = j + 70){
    plinko.push(new Plinko (j, 255, 10))
  }

  
  for (var k = 0; k <= width; k = k + 100){
    wall.push(new Wall (k, height - 150, 10, 240))
  }
  
}

function draw() {
  background("black");  
  Engine.update(engine)
  ground.display();

  /*wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();*/

  if (frameCount%60 === 0){
    particle.push(new Particle(random(width/2-30, width/2+30),10,10))
  } 

  for (var j = 0 ; j < particle.length; j = j + 1){
    particle[j].display()
  }

  for (var j = 0 ; j < plinko.length ; j = j + 1){
    plinko[j].display()
  }

  for (var k = 0 ; k < wall.length ; k = k + 1){
    wall[k].display()
  }

 
  
}