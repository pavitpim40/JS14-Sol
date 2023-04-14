// Lab 20
// จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
// ถ้า salaries เป็น empty object ให้ return null
// ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

// let salaries = {}

function topSalaries(salaries) {
  let max=0
  let topOne = ''
  for(k in salaries) 
    if(salaries[k] > max){
      topOne = k
      max = salaries[k]
    }
  return topOne || null
}

console.log(topSalaries(salaries))
