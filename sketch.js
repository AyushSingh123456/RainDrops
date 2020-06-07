const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, Matter;
var box1,box2, box3,box4,box5,box6,box7;
var array12 = []
var Ground1;
var triangle1

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Drop();
    
    box2 = new Drop();
    /*box3 = new Drop();
    box4 = new Drop();
    box5 = new Drop();
    box6 = new Drop();
    box7 = new Drop();
*/
array12.push(box1)
array12.push(box2)

}

function draw(){
    background("black");
    Engine.update(engine);
   box3=new Drop()
   array12.push(box3)
   /* box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
*/
for (var i =0;  i<array12.length; i++){
    array12[i].display()
}

   
}