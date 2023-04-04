// const isLeapYrs = (year) => {
//     // Guard clause
// if (year % 400 === 0) return true;
// if (year % 100 === 0) return false;
// if (year % 4 == 0) return true;
// return false;
// };

// const isLeapYrs = (year) => {
//     if (year % 100 == 0) return year % 400 === 0;
//     return year % 4 === 0;
// };

const isLeapYrs = (year) => (year % 100 == 0 ? year % 400 === 0 : year % 4 === 0);

const yr = 1500;
console.log(`Year ${yr} isLeapYr ${isLeapYrs(yr)}`);
