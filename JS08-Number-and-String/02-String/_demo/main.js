let message = 'Hello my friend!!'; // Who's next ? ==> iterable

// for(let i = 0; i < message.length;i++){
//   console.log(message[i])
// }

for (let char of message) {
    console.log(char);
}

// Object == Mutable

// let a = 5
// a = 10;

// const b = 5
// b =20

// const obj = {
//   name : "John",
//   age : 30
// }

// obj.name = "jane"
// obj.name

// Primitive == Immutable

// let m = "Hello"
// m = "Pello" // replace
