// - ประกาศตัวแปรสำหรับเก็บชื่อจริง และกำหนดค่าเริ่มต้นเป็นชื่อจริงของผู้เรียน
// - ประกาศตัวแปรสำหรับเก็บนามสกุล และกำหนดค่าเริ่มต้นเป็นนามสกุลของผู้เรียน
// - ประกาศตัวแปรสำหรับเก็บอายุ และกำหนดค่าเริ่มต้นเป็นอายุของผู้เรียน
// - ประกาศตัวแปรสำหรับเก็บที่อยู่ และกำหนดค่าเริ่มต้นเป็นที่อยู่ของผู้เรียน
// - ให้ใช้คำสั่ง console.log โดยให้ได้ผลลัพธ์ออกมาเป็น

// ```js
// Full Name: John Doe, Age: 27, Address: 118 Mint Tower Banthatthong Rd.
// ```

let firstName = 'pavit';
let lastName = 'pimchanagul';
let age = 20;
let address = '502 mint tower';

// let result = `Full Name: ${firstName} ${lastName}, Age: ${age}, Address: ${address}`;
let result = 'Full Name: ' + firstName + ' ' + lastName + ', Age:' + age + ', Address: ' + address;

console.log(result);
