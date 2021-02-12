class Pig{

    constructor(x,y){
       var option={
        restitution:0.8,
        friction:0.3,
        density:1
       }
       
        this.body = Bodies.rectangle(x,y,50,40,option)
        
        this.width = 50
        this.height = 40

        World.add(world,this.body);



    }
    display(){
        push()
        
        translate(this.body.position.x,this.body.position.y);
        
        rectMode(CENTER);
        fill("lime");
        rotate(this.body.angle);

        angleMode(RADIANS);

        rect(0,0,this.width,this.height);

        pop();
    
        
    
    }
    
}

