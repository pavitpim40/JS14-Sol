// -   ให้ใช้คำสั่ง prompt เพื่อรับชื่อผู้ใช้งาน
// -   ให้สร้างฟังก์ชันชื่อ sayHelloUser
// -   เมื่อเรียกใช้ฟังก์ชันให้ alert คำว่า “Hello ” ตามด้วยชื่อผู้ใช้งาน

let username = prompt('Enter username');

function sayHelloUser(name) {
    alert(`Hello ${name}`);
}

// let staffName = 'Hasan';

sayHelloUser('username');
sayHelloUser(username);
