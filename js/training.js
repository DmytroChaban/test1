"use strict";

// function first(second) {
//     //Do smth
//     setTimeout(function() {
//         console.log(1);
//     },500);
//     second();
// }

// function second() {
//     console.log(2);
// }

// first();
// first(second);

// function smth(first, second) {
//     first();
//     second();
// }

// smth(first, second)

let arr = [1,22,13,8,6];
let k = arr.pop();
console.log(k);
console.log(arr);

function compare(a,b) {
    return a-b
}
// let func = (a,b) => a-b
console.log(arr.sort(function(a,b) {return (a-b);}));
