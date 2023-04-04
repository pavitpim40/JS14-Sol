// Method = function ที่อยู่ใน key-value ของ object

// function johnSaid() {
//     console.log('Yeahhhh');
//     // return 5;
// }

const user = {
    // PROPERTY
    firstName: 'John',
    age: 32,

    // METHOD
    answer: function (text) {
        console.log('Yeahhhh' + text);
    },

    getAge: function () {
        // this == self
        console.log(this.age); // user.age
    },

    growOld: function () {
        this.age += 1; // user.age += 1
        this.getAge();
    },

    getName: function () {
        console.log(this.firstName);
    },
};

// console.log(user.firstName);
// console.log(user.answer());

// user.answer('!!!!!!!!');

// ถ้าใช้ this กับ method ของ object ==> this == object before dot
// user.getAge();
// user.growOld();
// user.growOld();
// user.getAge();
// user.getName();

// EX-2
// Declaration
// function logMyName() {
//     console.log(this.name);
// }

// Expression
// const logMyName = function () {
//     console.log(this.name);
// };

// Arrow : Losing this
const logMyName = () => console.log(this.name);

const user1 = {
    name: 'jane',
    log: logMyName,
};

const user2 = {
    name: 'robert',
    log: logMyName,
};

// ### this == current execution context === caller
user1.log(); // this == object before the dot == caller !!
user2.log();
