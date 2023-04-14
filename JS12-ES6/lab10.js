// Lab 10
// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่า
// เป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

let object1 = { name : 'andy', age: 45 }

const cloneObject = (obj) => ({...obj})

let object2 = cloneObject(object1)

object2.name = 'Bobby'

console.log(object1)
console.log(object2)

