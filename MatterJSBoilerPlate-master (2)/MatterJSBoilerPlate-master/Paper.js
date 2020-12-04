class Paper {
    constructor(x,y,radius){
        var Options={
            restitution:0.5,
            density:0.5,
            Force:10
            
            
            
        }
        this.body=Bodies.circle(x,y,radius,Options)
        World.add(world,this.body)
        this.radius=radius

    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius)
       
    }
}