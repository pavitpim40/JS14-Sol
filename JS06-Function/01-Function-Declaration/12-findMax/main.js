// function max(a, b, c, d) {
//     console.log(`length =  ${arguments.length}`);
//     if (a == undefined) return; // !a ==> !undefined ==> !false ==> true
//     if (b == undefined) return Math.max(a);
//     if (c == undefined) return Math.max(a, b);
//     if (d == undefined) return Math.max(a, b, c);
//     return Math.max(a, b, c, d);
// }

function max(a, b, c, d) {
    if (arguments.length == 0) return; // !a ==> !undefined ==> !false ==> true
    if (arguments.length == 1) return Math.max(a);
    if (arguments.length == 2) return Math.max(a, b);
    if (arguments.length == 3) return Math.max(a, b, c);
    return Math.max(a, b, c, d);
}

console.log(max());
console.log(max(2));
console.log(max(3, 1));
console.log(max(3, 1, 6));
console.log(max(7, 3, 9, 2));
console.log(max(7, 9, 9, 2));
console.log(max(7, 3, '9', 2));
console.log(max(7, 3, 'CC', 2));
