class Ground {
    constructor(){
        var Options={
            isStatic:true
        }
        this.body=Bodies.rectangle(430,50,250,10,Options)
        World.add(world,this.body)
    }
   display(){
       rect(this.body.position.x,this.body.position.y,280,10)
   }
}