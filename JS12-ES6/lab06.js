// Lab 6
// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ 
// แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ rest operator

function yourInfo(fname, lname, ...hobby) {
  return {
    fname : fname,
    lname : lname,
    hobby : [...hobby],
    numHobby : hobby.length
  }
}

let result = yourInfo('Andy', 'Howe', 'soccer', 'party', 'game')
console.log(result)