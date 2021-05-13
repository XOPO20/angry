class BaseClass {
  constructor(x, y, width, height) {
   
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.image=loadImage("sprites/base.png")
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("red");
    fill(255);
   // rect(0, 0, this.width, this.height);
image(this.image,0,0,this.width,this.height)
    pop();
  }
};