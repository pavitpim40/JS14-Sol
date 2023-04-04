let num = prompt('Enter number');

if (num === null || num === '' || num.trim() === '' || isNaN(num)) {
    alert('Invalid Number');
} else if (num % 2 == 0) {
    alert('Even Number');
} else {
    alert('Odd Number');
}
