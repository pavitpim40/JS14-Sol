// ให้ระบุค่าของ a, b, c , d และ e หลังจากจบการทำงานในแต่ละ statements

// ```js
// let a = 1;
// let b = 2;
// let c = a++;
// let d = ++c;
// let e = ++d + d++ + d;
// ```

let a = 1;
let b = 2;
let c = a++; // c = 2;

console.log('a', a);
console.log('c', c);

let d = ++c; // d = 2, c = 3;
let e = ++d + d++ + d;
