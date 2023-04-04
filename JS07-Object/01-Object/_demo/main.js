let userObj = {
    name: 'John',
    // "age": 30,
    // "isAdmin": true,
    // "address": { room: 502 },
};

// for (let key in userObj) {
//     console.log(`key == ${key}, typeof key == ${typeof key}`);

//     let value = userObj[key]; // userObj["name"], userObj["age"], userObj["isAdmin"]
//     console.log(`value is ${value}`);
// }
console.log(typeof userObj);
for (let key in userObj) {
    console.log(`KEY is ${key}, VALUE is ${userObj[key]}`);
}
// 1 : key == "name"
// 2 : key == "age"
// 3 : key == "isAdmin"

// let key = "name"
// userObj[key]
