class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.25,
        'friction':10,
        'density':10
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(255);
    push();
    translate(pos.x,pos.y)
    rotate(this.body.angle);
    rect( 0, 0, this.width, this.height);
    pop();
  }
  drawline(){
    fill("white");
    strokeWeight(4)
    stroke("red")
    line(0,0,200,200);
    noStroke();

  }
}
