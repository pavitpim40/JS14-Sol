function findMin(a, b) {
    // CASE 1 : a > b => return b
    // CASE 2 : b > a => return a
    // CASE 3: a == b => return อะไรก็ได้
    if (a >= b) {
        return b;
    } else {
        return a;
    }
}

let num1 = +prompt('Enter number-1'); // +"7" ==> 7
let num2 = +prompt('Enter number-2');

alert(findMin(num1, num2));
