class Box{

    constructor(x,y,){
       var option={
        restitution:0.1,
        friction:1,
        density:1
       }
       
        this.body = Bodies.rectangle(x,y,50,60,option)

      
        
        this.width = 50
        this.height = 60

        World.add(world,this.body);



    }
    display(){
        push()
        
        translate(this.body.position.x,this.body.position.y);
        
        stroke("red");
        strokeWeight(5);

        rectMode(CENTER);
        fill("cyan");
        rotate(this.body.angle);

        angleMode(RADIANS);

        rect(0,0,this.width,this.height);

        pop();
    }
    
}

