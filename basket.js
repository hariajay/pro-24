class Basket{
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        this.Body = Bodies.rectangle(x,y,width,height,option)
        this.Bodywidth = width
        this.Bodyheight = height
        World.add(world,this.Body)
    }
    display(){
        var pos = this.Body.position
        rectMode(CENTER)
        stroke("red")
        strokeWeight(3)
        fill("pink")
        rect(pos.x,pos.y,this.Bodywidth,this.Bodyheight)
    }
}