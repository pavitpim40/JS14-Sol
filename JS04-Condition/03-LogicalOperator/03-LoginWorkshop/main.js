// ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้กำหนด default value ของตัวแปร user เป็น guest

let input = prompt('Enter User') || 'guest';
console.log(input);

// prompt => null, "", "       ", "    pavit "

// null == null ==> true : Stop Eva
// if (input == null || input == '' || input.trim() == '') {
//     input = 'guest';
// }

// "" == "" => true : STOP EVA
// null == "" => false : next Operand
//  null.trim() == "" :Error เพราะ null เรียกใช้ trim ไม่ได้
// if (input == '' || input.trim() == '' || input == null) {
//     input = 'guest';
// }
