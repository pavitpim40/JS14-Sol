// [Solved] PB-1 : รับตัวเลขที่จะให้ทาย
// [Solved] PB-2 : Validate ตัวเลข ในช่วง 1-99 => isInRange
// [Solved] PB-3A : รับตัวเลขที่จะทาย
// [Solved] PB-3B : รับตัวเลขไปเรื่อยๆ จนกว่าจะทายถูก => do while
// [Solved] PB-3C : ทายถูก หรือ ทายผิด ?

// PB-4 : แสดงผลเมื่อทายผิด , ทายนอกช่วง => if else
//[Solved] PB-5 : แสดงผลเมื่อทายถูก
// PB-6 : จำนวนครั้งที่ทาย

// let guessNumber = prompt('Player A : Enter magic number in range 1-99');
// let answerNumber = prompt('Player B : Enter your answer in range 1-99');

// let num = 0;
// let isNumInRange = !(
//     num === null ||
//     num === '' ||
//     num.trim() === '' ||
//     isNaN(num) ||
//     num < 1 ||
//     num > 99
// );

// function isNumInRange(num) {
//     if (num === null || num === '' || num.trim() === '' || isNaN(num) || num < 1 || num > 99) {
//         return false;
//     } else {
//         return true;
//     }
// }
// alert(isNumInRange(guessNumber));

// isNumInRange("99")
// isNumInRange("108")

// if (guessNumber === answerNumber) alert('Genius');

// FINAL SOLUTION

function isNumInRange(num) {
    if (num === null || num === '' || num.trim() === '' || isNaN(num) || num < 1 || num > 99) {
        return false;
    } else {
        return true;
    }
}

let guessNumber;
let validNumber;

// ถามผู้เล่น A จนกว่าผู้เล่นจะกรอกเลขในช่วง 1-99 ถึงจะเลิกถาม
do {
    guessNumber = prompt('Player A : Enter magic number in range 1-99');
    validNumber = isNumInRange(guessNumber); // "98" ==> true , "CC" ==> false
} while (!validNumber);

let ansNumber;
let times = 0;

do {
    times += 1;
    ansNumber = prompt('Player B : Enter your answer in range 1-99');
    validNumber = isNumInRange(ansNumber);

    if (!validNumber) {
        alert('Please answer in range 1-99');
        continue;
    }

    if (+ansNumber !== +guessNumber) {
        if (+ansNumber < +guessNumber) alert('Too low');
        else alert('Too high');
    }
} while (+ansNumber !== +guessNumber || !validNumber); // +ansNumber !== +guessNumber

alert(`You're correct !! in ${times} time`);
