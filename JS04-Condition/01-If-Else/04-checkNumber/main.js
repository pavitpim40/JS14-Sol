// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
// - ถ้า input มากกว่า 0 ให้โชว์ข้อความ “Positive number”
// - ถ้า input เท่ากับ 0 ให้โชว์ข้อความ “Zero”
// - ถ้า input น้อยกว่า 0 ให้โชว์ข้อความ “Negative number”
// - ถ้า input ที่รับเข้ามาไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

// let num = prompt('Enter number');

// cancel ==> null

// ##1
// if (num > 0) {
//     alert('Positive Number');
// } else if (num == 0) {
//     // '' == 0 => 0 == 0
//     alert('Zero');
// } else if (num < 0) {
//     alert('Negative number');
// } else {
//     alert('Invalid Number');
// }

// #2
// if (num == '') {
//     alert('Invalid Number');
// } else if (num > 0) {
//     alert('Positive Number');
// } else if (num === 0) {
//     // '' == 0 => 0 == 0
//     alert('Zero');
// } else if (num < 0) {
//     alert('Negative number');
// } else {
//     alert('Invalid Number');
// }

let num = prompt('Enter number');

// num ==> null
// num ==> ''
// num ==> '                  ' => trim => ''
// num ==> "   20  " , "30", "0", "-542"
// num ==> "Codecamp" , "4 CCCC  2"

if (num === null || num === '' || num.trim() === '' || isNaN(num)) {
    alert('Invalid value');
} else if (num > 0) {
    alert('Positive Number');
} else if (num == 0) {
    // '' == 0 => 0 == 0
    alert('Zero');
} else {
    alert('Negative number');
}
