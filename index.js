// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides;
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce((acc,cur)=> acc+cur,0);
    }
}

class Triangle extends Polygon{
    constructor(sides){
        super(sides)
    }
    get isValid(){
        const sl = this.sides;
        return sl[0]+sl[1] > sl[2]
        && sl[1]+sl[2]>sl[0]
        && sl[0]+sl[2]>sl[1];
    }
}

class Square extends Polygon{
    constructor(sides){
        super(sides)
    }
    get isValid(){
        return this.perimeter/4 === this.sides[0];
    }
    get area(){
        return this.sides[0]*this.sides[1];
    }
}