class Shape {
    constructor(type) {
        this.type = type;
    }

    get_type() {
        console.log("hello");
    }
}

class Triangle extends Shape {
    constructor(side1, side2, side3) {  
        super("Triangle");
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
}

class Triangle extends Shape {
    constructor(side1, side2) {  
        super("Square");
        this.side1 = side1;
        this.side2 = side2;
    }
}

Triangle.prototype = Object.create(Shape.prototype);

let triangle1 = new Triangle(10, 10, 30);

triangle1.get_type();
console.log(triangle1.side1);
console.log(triangle1.side2);
console.log(triangle1.side3);