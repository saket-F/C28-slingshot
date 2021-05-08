class Chain
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.078,
            length: 10
        }

        this.pointB = pointB

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly()
    {
        this.chain.bodyA=null;
    }


    display()
    {
      if(this.chain.bodyA)
      {
        var pointA = this.chain.bodyA.position;
        var pointb = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointb.x, pointb.y);
      } 
    }
    
}