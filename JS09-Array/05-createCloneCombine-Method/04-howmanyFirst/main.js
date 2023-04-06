// console.log(first([7, 9, 0, -2])); // 7
// console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]
// console.log(first([], 3)); // []

function first(arr, n) {
    if (n == undefined || n == 1) return arr[0];
    return arr.slice(0, n);
}

const a = [7, 9, 0, -2];
console.log(first(a, 1)); // 7
console.log(first(a, 3));
console.log(first([], 3));
