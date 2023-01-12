const circle = {
    radius: 5, // 반지름

    // 원의 지름: 2r
    getDiameter() {
        return 2 * this.radius;
    },

    // 원의 둘레: 2πr
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    },

    // 원의 넓이: πrr
    getArea() {
        return Math.PI * this.radius ** 2;
    }
};

console.log(circle);
// {
//   radius: 5,
//   getDiameter: [Function: getDiameter],
//   getPerimeter: [Function: getPerimeter],
//   getArea: [Function: getArea]
// }
console.log(circle.radius);
// 5
console.log(circle.getDiameter());
// 10
console.log(circle.getPerimeter());
// 31.41592653589793
console.log(circle.getArea());
// 78.53981633974483

/*
객체지향 프로그래밍 = 객체의 상태(state)를 나타내는 데이터 + 상태 데이터를 조작할 수 있는 동작(behavior) 를 하나의 논리적인 단위로 묶어 생각한다.
따라서 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조라고 할 수 있다.
이때 객체의 상태 데이터를 프로퍼티(property), 동작을 메서드(method)라 부른다.
*/