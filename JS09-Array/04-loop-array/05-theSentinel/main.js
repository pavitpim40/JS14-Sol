// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

// Decompose Problem
// 1.Input
// 2.Validate
// 3.Create Array
// 4.Summarize Array

// PSEUDO CODE

// WHILE : user not enter cancel or NaN
// GET : input
// VALIDATE : input is number
// IF : input is number
// 		PUSH: number to array
// ELSE :
// 	BREAK
// SUMMARIZE : Array

// function isNum(num) {
//     if (num == null || num.trim() === '' || isNaN(num)) return false;
//     else return true;
// }

const isNum = (num) => !(num == null || num.trim() === '' || isNaN(num));

function summarizeArray() {
    let input;
    let arr = [];
    do {
        input = prompt('Enter your number');

        if (isNum(input)) {
            arr.push(+input);
        }
    } while (isNum(input));

    console.log(arr);

    let sum = 0;
    arr.forEach(function (num) {
        sum += num;
    });

    console.log(sum);
}

summarizeArray();
