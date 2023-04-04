// let message = 'Welcome to Thailand';

// function logMessage(message) {
//     // message = 'Hello everybody';
//     console.log(message);
// }

// logMessage(message + '!!!!!!!!'); // * "Hello everybody"
// console.log(message); // ** "Welcome to Thailand"

let name = 'John';

function sayHi(input) {
    console.log(name); // ***
    name = input; // name = undefined
}

sayHi(); // input = undefined
console.log(name); // undefined
// sayHi();
