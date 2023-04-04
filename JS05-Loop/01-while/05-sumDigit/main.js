let num = +prompt('Enter number');

/*
PB 1 : Input -> string, null need number ? negative ?
PB 2 : Count digit
*/

let num = 12345; // 12345 = 10,000 + 2,000 + 300 + 40 + 5
let remainder = 0;

// // NUM : 12345
remainder = num % 10; // 5
num = (num - remainder) / 10; // (12345 - 5) => 12340 => 1234

// // NUM : 1234
remainder = num % 10; // 4
num = (num - remainder) / 10; // 1234-4 => 1230 => 123

// // NUM : 123
remainder = num % 10; // 3
num = (num - remainder) / 10; // 123-3 => 120 => 12

// // NUM : 12
remainder = num % 10; // 2
num = (num - remainder) / 10; // 12-2 => 10 => 1

// // NUM : 1
remainder = num % 10; // 1
num = (num - remainder) / 10; // 1-1 => 0 => 0

// let num = 123;
// let count = 1;
// let remainder = 0

// if(num < 0) num *= -1;

// if(num > 0) {
// while (num > 0 && (num / 10) >= 0){
// remainder = num % 10 // 2
// num = (num - remainder) /10
// count++;
// }
// } else if (num == 0) {
//   count = 1
// }

// DEFINE 0 : count : 0

let num = 123;
let count = 0;
let remainder = 0;
let sum = 0;

while (num > 0) {
    remainder = num % 10; // 2
    num = (num - remainder) / 10;
    sum += remainder;
    count++;
}

console.log('count', count);
console.log('sum', sum);

// DEFINE 0 : count : 1

// let num = 123;
// let count = 1;

// while (num/10 > 1){
//   num = num /10;
//   count++;
//   }

// console.log("count = ", count)
