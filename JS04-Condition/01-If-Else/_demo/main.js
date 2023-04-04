// let year = prompt('In which year was ECMAScript-2015 specification published?');

// // if (year === '2015') alert('You are right!');
// // else alert("You're wrong");

// // if (year === '2015') {
// //     alert('You are right!');
// // } else {
// //     alert("You're wrong");
// // }

// if (year < 2015) {
//     alert('Too early...');
// } else if (year > 2015) {
//     alert('Too late');
// } else {
//     alert('Exactly!');
// }

// alert('end program');

// let total = 0;
let price = 500;

if (price >= 1000) {
    total = price * 1.1;
} else if (price >= 500) {
    total = price * 1.07;
} else {
    total = price * 1.05;
}

let total = price >= 1000 ? price * 1.1 : price >= 500 ? price * 1.07 : price * 1.05;

alert(total);
