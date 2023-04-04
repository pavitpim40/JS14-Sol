let a = prompt('Enter first Number'); // "5"
let b = prompt('Enter second Number');

// #1
// if (a === null || a === '' || a.trim() === '' || isNaN(a)) {
//     alert('Invalid Value');
// } else if (b === null || b === '' || b.trim() === '' || isNaN(b)) {
//     alert('Invalid Value');
// } else {
//     alert(+a + +b);
// }

// #2
function isValidNum(a) {
    if (a === null || a === '' || a.trim() === '' || isNaN(a)) {
        return false;
    } else {
        return true;
    }
}

// #2A
// if (isValidNum(a) && isValidNum(b)) {
//     alert(+a + +b);
// } else {
//     alert('Invalid Number');
// }

// #2B
if (!isValidNum(a) || !isValidNum(b)) {
    alert('Invalid Number');
} else {
    alert(+a + +b);
}
