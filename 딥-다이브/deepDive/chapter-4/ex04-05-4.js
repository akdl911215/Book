const test = new ClassTest(10);
console.log(test.getReturnValue);
// ReferenceError: Cannot access 'ClassTest' before initialization

class ClassTest {
    constructor(i) {
        this.i = i;
    }

    getReturnValue() {
         return this.i + 10;
    }
}


