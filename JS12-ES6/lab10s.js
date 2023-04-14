
let object1 = { name : {fname: 'andy', lname: 'howe'}, age: 45 }

const cloneObject = (obj) => ({...obj})

let object2 = cloneObject(object1)

object2.name.fname = 'Bobby'

console.log(object1)
console.log(object2)

// เมื่อเปลี่ยนชื่อของ object2 จะกระทบไปที่ object1 ด้วยเพราะ reference ไปที่เดียวกัน
// ให้หาวิธี cloneObject โดยแยก nested-object ให้เป็นคนละตัว

// keyword : shallow-copy vs. deep-copy

