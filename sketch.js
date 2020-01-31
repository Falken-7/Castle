const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    tower1 = new Tower1(720,200,80,200);
    tower2 = new Tower1(880,200,80,200);
   tower3 = new Tower1(800,200,80,300);
   tower4 = new Tower1(660,200,20,350);
   tower5 = new Tower1(940,200,20,350);
    bird = new Bird(200,380);
    slingshot = new SlingShot(bird.body,{x:200, y:300});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
   
    tower1.display();
    tower2.display();
    tower3.display();
    tower4.display();
    tower5.display();

    
    

    bird.display();
   
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}