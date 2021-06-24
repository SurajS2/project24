const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var r1,r2,r3
var s1,s2
var i1,i2


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    r1 = new Rubber(300,200,50)
    r2 = new Rubber(600,400,50)
    r3 = new Rubber(400,200,50)

    s1 = new Stone(300,400,50,30)
    s2 = new Stone(420,350,30,20)

    i1 = new Iron(900,400,80,60)
    i2 = new Iron(1000,500,90,80)





}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    r1.display()
    r2.display()
    r3.display()

    s1.display()
    s2.display()

    i1.display()
    i2.display()

    
 
}