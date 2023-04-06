random(5, 10); // 5-10

// PB-1 : increase MAX from 1 to arbitrary
// PB-2 : increase MIN from 0 to arbitrary

// Math.random() * 3 // 0-2.999999
// 2 + Math.random() * 3 // 2-4.9999999

function random(min, max) {
    // return Math.random() * max;
    return min + Math.random() * (max - min);
}

for (let i = 0; i < 30; i++) {
    console.log(random(2, 5));
}
