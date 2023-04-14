// Lab 18
// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age 
// โดยถ้า user มีอายุมากกว่า 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล 
// ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)


function checkAge({firstName, lastName, age}) {
  if ( !(firstName && lastName && age) )
    return "Incomplete Input"
  return age>=18 ? `Hello, ${firstName} ${lastName}` : `Please comeback next ${18-age} years`
}

let user = {firstName: 'Andy', lastName: 'Howe', age : 17}
let result = checkAge(user)
console.log(result)

