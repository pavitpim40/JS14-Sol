const array = [1, 2, 3, 4, 5, 6];

function summarizeFn(acc, item, index, arr) {
    console.log(`ROUND:${index + 1}`, `ACC:${acc}`, item);
    // DO-LOGIC about summarize

    // Return : New Accumulator

    // return acc + item;
    return acc + item ** 2;
}

let result = array.reduce(summarizeFn, 0);
console.log(result);
// How reduce work
// 1st : summarizeFn(0,1,0,array)  ==> acc
// 2nd : summarizeFn(1 ,2,1,array)
// 3rd : summarizeFn (3,3,2,array)
