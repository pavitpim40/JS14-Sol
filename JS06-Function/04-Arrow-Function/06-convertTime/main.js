const convertDayToSec = (day) => day * 24 * 60 * 60;

console.log(convertDayToSec(10));

const objectName = {
    key: 5,
};

const user = {
    name: 'john',
    age: 30,
    isAdmin: false,
    'birth date': '19-09-1995',
};

let d = {
    name: 'Codecamp',
    age: 14,
    increase: function () {
        console.log('IN METHOD INCREASE', this);
        this.age += 1;
    },
    decrease() {
        console.log('IN METHOD DECREASE', this);
        this.age -= 1;
    },
};
d.increase();
console.log(d.age); // 15
d.decrease();
console.log(d.age); // 14
