// Lab 8
// จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array 
// ที่มี element ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม

let array1 = [10,20,30,40,50,60,70,80,90]

function random(min, max) {
  return Math.floor(Math.random() * (max-min) + min)
}

function removeRandom([...arr]) {
  let idx = random(0, arr.length)
  console.log(idx)
  arr.splice(idx, 1)
  return arr
}

console.log(array1)
console.log(removeRandom(array1))
console.log(array1)


