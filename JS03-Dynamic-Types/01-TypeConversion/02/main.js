// - จากโค้ดด้านล่างให้เขียนคำสั่งเพื่อแปลง a, b และ c ให้เป็น Number แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
// - ให้ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f
// - ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร

// ```js
// let a = undefined;
// let b = null;
// let c = b + "4 2";
// ```

let a = undefined;
let b = null;
let c = b + '4 2'; // 'null4 2'

let d = Number(undefined); // NaN
let e = +b; // 0
let f = 1 * c; // NaN
