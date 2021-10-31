class Figure3D {
  constructor(name) {
    this.name = name;
  }
 
 }

class Ball extends Figure3D {
  constructor(R) {
    super("Ball");
    this.R = R;
  }
  getArea() {
      return 4/3 * Math.PI * Math.pow(this.R, 3)
  }
}


class Сylinder extends Figure3D {
    constructor(R, height) {
   super('Сylinder')
   this.R = R
   this.height = height
    }
    getArea() {
        return Math.PI * (this.R*this.R) * this.height
    }
}

class Cube extends Figure3D {
    constructor(side) {
   super('Cube')
   this.side = side
   
    }
    getArea() {
        return Math.pow(this.side, 3)
    }
}


const ball = new Ball(3)
const cylinder = new Сylinder(4, 10)
const cube = new Cube (5)