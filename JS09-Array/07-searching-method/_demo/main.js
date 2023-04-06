// const arr = ['a', 'f', 'm', '0', 'j', 0, 'z', 'm'];

// let r = arr.includes(0, -2); // 8+(-3) == 5

// console.log(arr.length);
// console.log(r);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const arr = ['a', 'b', 'c'];

// function satisfyFn(num, index, arr) {
//     console.log(num, index, arr);
//     if (num === 2) return true;
//     // else return false;
// }

// let r = arr.find(satisfyFn);
// let r = arr.findIndex((el) => el > 5);
// How arr.find Work
// 1st : satisfyFn(1,0,arr)

// console.log(arr);
// console.log('RETURN : ', r);

const cart = [
    { price: 200, amount: 2 },
    { price: 500, amount: 2 },
    { price: 300, amount: 3 },
];
// ซื้อเกิน 700 บาท
// function satisfyFn(obj) {
//     let total = obj.price * obj.amount;
//     if (total > 500) return true;
//     // else return false;

//     // return obj.price * obj.amount > 700;
// }

// const r = cart.find(satisfyFn);

// const r = cart.find((obj) => obj.price * obj.amount > 700);

// console.log(r);

// LAB-4
const nums = [7, 9, -5, -1, 0, 3];
// expexted result: -5

// ##1
const satisfyFn = function (num) {
    if (num < 0) return true;
};
// let result = nums.find(satisfyFn)

// ##2
// let result = nums.find(function (num) {
//     if (num < 0) return true;
// });

// ##3
let result = nums.find((num) => num < 0);
console.log(result);
