//#### EXAMPLE

// const arr = [2, 4, 6, 8, 10];

// function mapFn(num, index) {
//     return num * 2;
// }

// const resultArr = arr.map(mapFn);
// const resultArr = arr.map((num) => num ** 2);

// console.log(resultArr);

// ##### LAB1

// const array = [
//     { name: 'apple', surname: 'London' },
//     { name: 'banana', surname: 'Bangkok' },
//     { name: 'watermelon', surname: 'Singapore' },
// ];
// Declarative : Functional Programming
// const resultArr = array.map((o) => `${o.name} ${o.surname}`);
// console.log(resultArr);

// Imperative
// let resultArray = [];

// for (let i = 0; i < array.length; i++) {
//     let text = `${array[i].name} ${array[i].surname}`;
//     resultArray.push(text);
// }
// console.log(resultArray);

// ##### SORT

// const arr = [1, 2, 9, 7, 3, 11];

// function sortFn(a, b) {
//     if (a > b) return 1; // swap
//     else return -1;
// }

// function sortFn(a, b) {
//     if (a < b) return 1; // swap
//     else return -1;
// }

// arr.sort(sortFn);
// arr.sort((a, b) => b - a);

// console.log(arr);

// ###### SPLIT, JOIN

let text = 'Bangkok, Tak, Nan';

let arr = text.split(', ');

console.log(arr);
// console.log(arr.length);

let resultText = arr.join('==**==');
console.log(resultText);
