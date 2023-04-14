// Lab 9
// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ 
// return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

let array1 = [10,20,30,40,50,60,70,80,90]
// let array1 = [10,20,30,40,50,60,70,80,90,[2,3]]
// let array1 = [10,20,30,40,50,60,70,80,90,{ mark: 99}]

// const cloneArray = ([...arr]) => arr
const cloneArray = (arr) => [...arr]

let array2 = cloneArray(array1)

// array2[9] = [5,6]
// array2[9].mark = 555

console.log(array1)
console.log(array2)