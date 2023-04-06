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
