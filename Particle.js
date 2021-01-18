class Particle {
    constructor(x,y,r) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,r,options);
      this.color = color(random(0 , 255) , random(0 , 255),random(0 , 255))
      this.r = r
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      strokeWeight(0)
      fill(this.color);
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  };
