const array = [29, 17, 13, 47, 23, 31];

let sum = 0;

function summarize(num, index, arr) {
    sum += num;
}

[29, 17, 13, 47, 23, 31].forEach(summarize);
// 1st : summarize(29,0,array)
// 2nd : summarize(17,1,array)
// 3rd : summarize(13,2,array)
// ..
// ..
// 6th : summarize(31,5,array)

console.log(sum);
