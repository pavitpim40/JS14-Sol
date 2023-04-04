// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Did parents allow you?'); // true , false
//     }
// }

// #1 Only if
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }

//     return confirm('Did parents allow you?'); // true , false
// }

// #2 Ternary

function checkAge(age) {
    return age > 18 ? true : confirm('Did parents allow you?');
}

// #3 OR

function checkAge(age) {
    return age > 18 || confirm('Did parents allow you?');
}

console.log(checkAge(15));
