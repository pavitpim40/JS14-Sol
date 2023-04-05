// let userA = {
//   name : "John",
//   age : 30 ,
//   sayHi : () => console.log("Hey"),
//   getAge : function () { return this.age},
//   growOld : function () {this.age +=1},
// }

// let userB = {
//   name : "Jane",
//   age : 20,
// }

function User(name, age) {
    //#1 this = {}
    this.name = name; // this === {name: "John"}
    this.age = age; // this === {name : "John", age : 30 }
    this.isAdmin = true; // this === {name : "John", age: 30, isAdmin:true}
    this.sayHi = () => console.log('Hey');

    // #2 return this == {name : "John", age: 30, isAdmin:true, sayHi(){console.log("Hey")}}
}

let userA = new User('John', 30);
console.log(userA.name);
console.log(userA.age);
console.log(userA.isAdmin);
console.log(userA.sayHi());

let userB = new User('Jane', 20);
let userC = new User('Jame', 25);

console.log(userB);
console.log(userC);
