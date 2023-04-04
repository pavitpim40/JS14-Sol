// INPUT : object ที่จะตรวจสอบ
// OUTPUT : Boolean (true,false)

function isEmptyObj(object) {
    for (let k in object) {
        // ถ้า code ใน for..in ถูกรัน แปลว่า notEmpty
        console.log('in loop');
        return false;
    }

    return true; // false
}
let obj = { name: 'John', age: 20 };
// let obj = {};
let result = isEmptyObj(obj);

console.log(result);
