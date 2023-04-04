// // #### CALL BACK

// // TASK-1:คำนวณ
// // TASK-2:Show ผลลัพธ์
// // TASK-3:คืนค่าผลลัพธ์การคูณ
// function logMyResult(a) {
//     console.log(`My Result is ${a}`);
// }

// function alertMyResult(a) {
//     alert(`My Result is ${a}`);
// }

// function multiply(num1, num2, callBack) {
//     let result = num1 * num2; // TASK-1

//     // TASK-2 Log? alert ?
//     // if (isLog) console.log(`result is ${result}`);
//     // else alert(result);
//     callBack(result); // logMyResult(a)

//     return result; // TASK-3
// }

// multiply(2, 5, alertMyResult);

// // console.log(multiply(2, 5));

// // ##### LEXICAL SCOPE
// let message = 'GLOBAL';

// // DEFINE: FN-B
// function b() {
//     let message = 'LOCAL';

//     // DEFINE: FN-C
//     function c() {
//         console.log(message);
//     }

//     // CALL:FN-C
//     c();
// }

// // CALL:FN-B
// b();

// // LEXICAL SCOPE == Where we define a function is Matter

// CLOSURE

function adder(magicNumber) {
    // Memoization, Private Variable
    // let magicNumber = 42;
    return function add(num) {
        return num + magicNumber;
    };
}

// console.log(magicNumber);
let addFortyTwo = adder(42); // return ==> FN
console.log(addFortyTwo(5));
console.log(addFortyTwo(10));
console.log(addFortyTwo(20));

let addTen = adder(10);
console.log(addTen(2));
