class Drop {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.circle(random(0,400), 0, random(10, 20), options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      ellipseMode(CENTER);
      fill(128,128,random(10,255));
      push();
      translate(pos.x,pos.y);
      rotate (angle);
      ellipse(0, 0, random(5,10), random(5,10));
      pop();
    }
  };
  
  