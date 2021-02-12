class Log{

    constructor(x,y,height,angle){
       var option={
        restitution:0.1,
        friction:3,
        density:1
       }
       
        this.body = Bodies.rectangle(x,y,15,height,option)

        Matter.Body.setAngle(this.body,angle)

        this.width = 15
        this.height = height

        World.add(world,this.body);

    }
    display(){
  
        push()
        
        translate(this.body.position.x,this.body.position.y);
        
        stroke("blue");
        strokeWeight(5);

        rectMode(CENTER);
        fill("gray");
        rotate(this.body.angle);

        //angleMode(RADIANS);

        rect(0,0,this.width,this.height);

        pop();
    }
    
}