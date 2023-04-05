// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function Calculator() {
    // this = {}
    // property
    // this.x = 0;
    // this.y = 0;

    // method
    this.read = function () {
        this.x = +prompt('Enter your first Number');
        this.y = +prompt('Enter your second Number');
    };

    this.sum = function () {
        return this.x + this.y;
    };

    this.mul = () => {
        return this.x * this.y;
    };

    // return this
}

let calculator1 = new Calculator();

calculator1.read();

let sum = calculator1.sum();
let mul = calculator1.mul();
console.log(calculator1.sum());
console.log(mul);
