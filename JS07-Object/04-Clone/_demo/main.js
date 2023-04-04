// const user = {
//     name: 'john',
//     age: 30,
// };

// const newUser = {};

// for (let key in user) {
// console.log(key, user[key]);

// newUser[key] = user[key];
// 1 : newUser.name = user.name
// 2 : newUser.age = user.age
// }

// console.log(newUser);
// newUser.name = 'Mo Salah';
// newUser.age = 20;
// console.log(newUser);

// console.log(user);

// ### Object.assign

let permissions1 = { canView: true, name: 'Helen' };
let permissions2 = { canEdit: true, name: 'Winston' };
let user = { name: 'John' };

// #1
// let newUser = {};
// Object.assign(newUser, user, permissions1, permissions2);

// #2
const newUser = Object.assign({}, permissions2, permissions1, user);
// {canEdit : true, name : "Winston"}
// {canEdit : true, canView : true, name : "Helen"}
// {canEdit : true, canView : true, name : "John"}

console.log(newUser);
console.log(user);
console.log(permissions1);
console.log(permissions2);
