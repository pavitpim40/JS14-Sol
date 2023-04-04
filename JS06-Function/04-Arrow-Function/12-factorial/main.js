// ให้เขียนฟังก์ชันคำนวณค่า factorial

// 1! = 1
// 2! = 1*2 = 2*1
// 3! = 1*2*3 = 3*2*1
// 6! = 6*5*4*3*2*1 = 6*5! = 6*5*4!

// const factorial = (n) => {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         // 1,2,3,4,5,6,...,n
//         result = result * i;
//     }
//     return result;
// };

const factorial = (n) => {
    // BASE CASE
    if (n == 1) return 1;
    // RECURSIVE CASE
    else return n * factorial(n - 1); /// 2 * factorial(1)
};

alert(factorial(5));
