const calculator = {
    x: 0,
    y: 0,
    read: function () {
        this.x = +prompt('Enter number-1');
        this.y = +prompt('Enter number-2');
    },
    sum: function () {
        let result = this.x + this.y;
        // this.x = 0;
        // this.y = 0;
        return result;
    },
};

calculator.read();
console.log(calculator);

let r = calculator.sum();
console.log(`Sum == ${r}`);
console.log(calculator);
