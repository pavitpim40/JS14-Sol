// LAB-2

const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

// findIndex => satisfy index ONCE
// indexOf => index (but can provide fromIndex)
// forEach,forOf

let result = [];

// for (let index in alphabets) {
//     if (alphabets[index] == 'a') {
//         result.push(+index);
//     }
// }

// alphabets.forEach((char, index) => {
//     if (char === 'a') result.push(index);
// });

// let foundedIndex;
// let fromIndex = 0;
// do {
//     foundedIndex = alphabets.indexOf('a', fromIndex);
//     if (foundedIndex != -1) {
//         // 0
//         result.push(foundedIndex);
//         fromIndex = foundedIndex + 1;
//     }
// } while (foundedIndex != -1);

// console.log(result);
