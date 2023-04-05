const fruits = ['Apple', 'Orange', 'Pear']; // fruits.length == 3

// #1 for-loop
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i])
}

// #2 for-in
// ARR = {0:"Apple", 1: "Orange", 2:"Pear"} // Array like object

for (let index in fruits) {
    // console.log("index",index)
    // console.log(fruits[index]);
}

// #3 for-of
for (let item of fruits) {
    // console.log(item)
}

// #4 ArrayMethod ForEach
// SYNTAX : array.method()

// param1 : item
// param2 : index
// paran3 : self

// #1
// function iterateFN(item,index,c) {
//   console.log(item,index)
// }

// #2
// const iterateFN = function (item,index) {
//    console.log(item,index)
// }

// #3
// const iterateFN =  (item,index) => console.log(item,index)
// fruits.forEach(iterateFN)

// #4

// fruits.forEach((item,index)=>{console.log(item,index)})

// const cart = [{id:1, price: 20,quantity: 2}, {id:2, price:200, quantity: 10}]

const cart = [10, 20, 30, 40, 50];

let sum = 0;

cart.forEach(function (el, idx) {
    // console.log(el)
    // sum += el.price * el.quantity
    sum += el;
});

sum;
