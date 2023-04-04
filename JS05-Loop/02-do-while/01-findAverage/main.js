// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

/*
PB-1 : Input at least once
PB-2 : Validate Input for continue loop ?
PB-3 : Average
*/

// let num = null;
// let num = prompt('Enter Number');
// let isValid = !(num === 0 );
// let isValid = !(num < 0);

// let isValid = num !== null || num !== '' || num.trim() != '' || !isNaN(num) || +num > 0;

// let notValid = num === null || num === '' || num.trim() === '' || isNaN(num) || +num <= 0;
// let isValid = !(num === null || num === '' || num.trim() === '' || isNaN(num) || +num <= 0);

// alert(notValid);
// let isValid = num === null && num.trim() == ""

let num,
    isValid,
    count = 0,
    sum = 0;

do {
    num = prompt('Enter Number');
    isValid = !(num === null || num === '' || num.trim() === '' || isNaN(num) || +num <= 0);
    if (isValid) {
        count++;
        sum += +num;
    }
} while (isValid);

alert(sum);
alert(sum / count);
