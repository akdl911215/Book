function Circle (radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this 에 바인딩된다.
    console.log(this); // Circle {}

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };

    return this;
}

const circle = new Circle(5);
console.log(circle); // Circle { radius: 5, getDiameter: [Function (anonymous)] }