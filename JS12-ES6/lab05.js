// Lab 5
// จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง


let array1 = [10,15,20,25,30]

function powAt3([...tmp]) {
  tmp[3] = tmp[3] ** 2
  return tmp
}

let result = powAt3(array1)
console.log(result)
console.log(array1)
