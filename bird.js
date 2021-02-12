class Bird{

    constructor(x,y){
       var option={
        restitution:1.0,
        //friction:1,
        //density:0.1
       }
       
        this.body = Bodies.rectangle(x,y,20,20,option)

        this.width = 50
        this.height = 60

        World.add(world,this.body);

    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y =mouseY;
        
        push()
        
        translate(this.body.position.x,this.body.position.y);
        
        stroke("orange");
        strokeWeight(5);

        rectMode(CENTER);
        fill("red");
        rotate(this.body.angle);

        angleMode(RADIANS);

        rect(0,0,this.width,this.height);

        pop();
    }
    
}

