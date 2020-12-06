const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var box17,  box18, box19, box20, box21, box22, box23, box24, box25;
var polygon, polygonImg;

function preload(){
    polygonImg = loadImage("polygon.png");    
}

function setup(){
    var canvas = createCanvas(1500,700); 

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(750, 680, 1500, 20);
    stand1 = new Ground(650, 500, 400, 20);
    stand2 = new Ground(1200, 350, 250, 20);

    box1 = new Box(650, 490, 40, 50);
    box2 = new Box(675, 490, 40, 50);
    box3 = new Box(700, 490, 40, 50);
    box4 = new Box(730, 490, 40, 50);
    box5 = new Box(625, 490, 40, 50);
    box6 = new Box(600, 490, 40, 50);
    box7 = new Box(575, 490, 40, 50);
    box8 = new Box(650, 440, 40, 50);
    box9 = new Box(725, 400, 40, 50);
    box10 = new Box(675, 440, 40, 50);
    box11 = new Box(610, 440, 40, 50); 
    box12 = new Box(570, 400, 40, 50); 
    box13 = new Box(645, 380, 40, 50);
    box14 = new Box(680, 380, 40, 50);
    box15 = new Box(602, 310, 40, 50);
    box16 = new Box(645, 280, 40, 50);
    box17 = new Box(1200, 349, 40, 50);
    box18 = new Box(1220, 349, 40, 50);  
    box19 = new Box(1230, 349, 40, 50);
    box20 = new Box(1190, 349, 40, 50);
    box21 = new Box(1170, 349, 40, 50);
    box22 = new Box(1200, 274, 40, 50); 
    box23 = new Box(1240, 274, 40, 50);
    box24 = new Box(1165, 274, 40, 50);
    box25 = new Box(1200, 257, 40, 50);

   
    polygon = Bodies.circle(150, 350, 20);
    //imageMode(CENTER);
    //image(polygonImg, 0, 0, 20, 20);
    World.add(world, polygon)

    sling = new SlingShot(polygon.body, {x: 150, y: 350});

        

}

function draw(){

    background(0);
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();
    sling.display();

    polygon.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();    
    box15.display();
    box16.display();
    box17.display();  
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

}

function mouseDragged(){
    Matter.Body.setPosition(Polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}