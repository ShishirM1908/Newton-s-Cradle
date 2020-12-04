class Chain {
    constructor(bodyA,pointB){
        var Options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            lenght:100
        }
    this.chain=Constraint.create(Options)
     World.add(world,this.chain)
     this.pointB=pointB
    }
    display(){
       var pointA=this.chain.bodyA.position
       var pointB=this.pointB
       strokeWeight(5);
       stroke("white")
       line(pointA.x,pointA.y,pointB.x,pointB.y) 
    }
}