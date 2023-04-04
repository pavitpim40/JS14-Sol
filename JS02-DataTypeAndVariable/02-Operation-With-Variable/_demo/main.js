let a = 1;
let b = 2;
let c = a++; // use old value before update

// let c = a
// a = a+1;
// console.log("a",a);
// console.log("c",c);

// BEF : c = 1

let d = ++c; // update before use

console.log('c', c);
console.log('d', d);
// AFTER
// c = 2
// d = 2

// d = 2
let e = ++d + d++ + d;
// d == (3 + 3) +  4 ==> 10

/*
let d = 2;
let e;


// Expression-1 :  ++d;
d = d + 1; // 3
let t1 = d;

// Expression-2 : d++;
let t2 = d; // 3
d = d + 1; // 4

// Expression-3 : d;
let t3 = d // 4


let e = t1 + t2 + t3;
      =  3  + 3  + 4
e = 10;
d = 4;

*/
