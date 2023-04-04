// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

/*
Decompose Problem
PB-1: logs 
PB-2: createObject
PB-3: accept input until stop (input ==> key,value)
*/

let key, value;
let object = {};

do {
    key = prompt('Enter your key');
    value = prompt('Enter your value');

    // create property
    if (key !== 'stop' && value !== 'stop') {
        object[key] = value; // object["name"] = "john"
    }
} while (key !== 'stop' && value !== 'stop');

console.log(object);
console.log('end program');
