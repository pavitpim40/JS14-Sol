// Global Scope

const a = 0;
const b = 0;

// let a = 5;

console.log(a);

// Block Scope
{
    const a = 5;
    // a += 7
    console.log('BLOCK', a);
}

console.log(a);

// GLOBAL

// var a = 10;
// var a = 20;
// var a = 30;
// var a = 40;

// let b = 10;
// let b = 20;

// BLOCK

{
    // let,const : Block scope
    // var : Global Scope, Redeclaration (duplicate name in same scope)
    var a = 10;
    console.log(a);
}

console.log(a);
