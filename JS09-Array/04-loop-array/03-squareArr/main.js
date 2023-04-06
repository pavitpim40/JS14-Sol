// - ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์

// ```js
// const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]
// ```

const arr = [2, 3, 5, 7, 11];

const newArr = [];
function squareNum(num, index) {
    newArr.push(num ** 2);
    // [].push(2**2)
    // [4].push(3**2)
    // [4,9].push(5**2)
}

arr.forEach(squareNum);

console.log(newArr);

// #2
const resultArr = [];
for (let num of arr) {
    resultArr.push(num ** 2);
}

console.log(resultArr);
