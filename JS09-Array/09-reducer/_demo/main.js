// const array = [1, 2, 3, 4, 5, 6];
// const array = [1, 2, 3, 4, 5, 6];

// function summarizeFn(acc, item, index, arr) {
//     console.log(`ROUND:${index + 1}`, `ACC:${acc}`, item);
//     // DO-LOGIC about summarize

//     // Return : New Accumulator

//     // return acc + item;
//     // acc.push(item * 2); // [2,4,6]
//     return acc; // [2,4,6]
// }

// let result = array.reduce(summarizeFn);
// console.log(result);
// How reduce work
// 1st : summarizeFn([],1,0,array)  ==> acc
// 2nd : summarizeFn([2] ,2,1,array)
// 3rd : summarizeFn ([2,4],3,2,array)
// 3rd : summarizeFn ([2,4,6],3,2,array)

// LAB 1

// จงหาผลคูณของ element ใน nums
// const nums = [-3, 2, 11, -7, 4, 6];

// let result = nums.reduce(function (acc, item) {
//     let result = acc * item;
//     return result;
// }, 1);

// a : accumulator , prev : previous value
// c : currentValue
// let result = nums.reduce((a, c) => a * c, 1);
// console.log(result);

// LAB 3
// const scores = [
//     { score: 90, subject: 'HTML', weight: 0.2 },
//     { score: 95, subject: 'CSS', weight: 0.3 },
//     { score: 85, subject: 'JavaScript', weight: 0.5 },
// ];
// expected result: 89

// Subject A : Grade : 4 , unit : 3
// Subject B : Grade : 3 , unit : 1
// (4*3 + 3*1)/(3+1)

// let result = scores.reduce((acc, cur) => {
//     let currentPoint = cur.score * cur.weight;
//     return acc + currentPoint;
// }, 0);

// let result2 = scores.reduce((a, c) => a + c.score * c.weight, 0);
// console.log(result, result2);

// LAB-5

// let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
// reduce => {min: minValue, max:maxValue}
// reduce => [minValue,maxValue]

// INIT ACC
// let initAcc = {
//     min: Infinity, // Infinity vs 3.24 => min : 3.24
//     max: -Infinity, // -Infinity vs 3.24 => max : 3.24
// };

// let result = arr.reduce(function (acc, cur) {
//     // {min: Infinity, max:-Infinity}
//     // Compare MIN
//     if (cur < acc.min) {
//         console.log('MIN', acc.min);
//         console.log('CUR', cur);
//         acc.min = cur; // {min: 3.24, max:-Infinity}
//     }
//     // Compare MAX
//     if (cur > acc.max) {
//         acc.max = cur; //  {min: 3.24, max:3.24}
//     }
//     return acc;
// }, initAcc);

// console.log(result);

// LAB-8

let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

// const strArr = str.split('').map((char) => char.toLowerCase());
const strArr = str
    .toLowerCase()
    .split('')
    .filter((char) => char != ' ');

console.log(strArr);

let result = strArr.reduce((acc, char) => {
    // CASE 1 : ไม่มี char ใน object => เพิ่ม key และ value =1
    if (!acc[char]) {
        acc[char] = 1;
    }
    // CASE 2 : มี char ใน object อยู่แล้ว - count += 1
    else {
        acc[char] = acc[char] + 1;
    }
    return acc;
}, {});

console.log(result);
