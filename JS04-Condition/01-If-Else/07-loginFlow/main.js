// let username = prompt('Enter username');
// let password = prompt('Enter password');

// #1
// if (username == null || username.trim() == '') {
//     alert('Username is required');
// } else if (password == null || password.trim() == '') {
//     alert('Username is required');
// } else if (username == 'admin' && password == '1234') {
//     alert(`Hello ${username}`);
// } else if (username == 'john' && password == 'qwerty') {
//     alert(`Hello ${username}`);
// } else {
//     alert('Invalid username and password');
// }

// #2

// let username = prompt('Please input your username');

// if (isValid(username)) {
//     // USERNAME VALID
//     // Input Password
//     let pass = prompt('Please input your password');

//     if (isValid(pass)) {
//         if ((username == 'admin' && pass == '1234') || (username == 'john' && pass == 'qwerty')) {
//             alert('Hello ' + username);
//         } else {
//             alert('invalid username or password');
//         }
//     } else {
//         alert('Password is required.');
//     }
// } else {
//     alert('Username is required.');
// }

// function isValid(a) {
//     if (a === null || a === '' || a.trim() === '') {
//         return false;
//     } else {
//         return true;
//     }
// }

// #3
let a = prompt('Enter your name');
let b = prompt('Enter your password');

function isValid(a) {
    if (a === null || a === '' || a.trim() === '' || isNaN(a)) {
        return false;
    } else {
        return true;
    }
}

function isValid(b) {
    if (b === null || b === '' || b.trim() === '') {
        return false;
    } else {
        return true;
    }
}

// TEST CASE 1
// username : admin => isValid == false
// password : 1234 ==> isValid == true
//  !false && !true ==> false

// TEST CASE 2
// username : john => isValid == false
// password : qwerty ==> isValid == false
//  !false && !false ==> true

if (!isValid(a) && !isValid(b)) {
    alert('user/password is required');
} else if (a == 'admin' && b == '1234') {
    alert('Hello admin');
} else if (a == 'john' && b == 'qwerty') {
    alert('Hello john');
} else if ((a !== 'admin' && b !== '1234') || (a !== 'john' && b !== 'qwerty')) {
    alert('Invalid user or password');
}
