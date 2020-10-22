// blueprint of a box or can be called a rectangle type of box making code
class Box {
    constructor(x, y, width, height) {

      this.body = Bodies.rectangle(x, y, width, height, {isStatic:true});
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("red");
      rect(this.x,this.y,this.width, this.height);
    }
  };
  