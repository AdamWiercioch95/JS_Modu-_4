// max
// function add(a, b){
//     return a + b;
// }

// function expression (przypisanie deklaracji funkcji do zmiennej)
// const add1 = function(a, b){
//     return a + b;
// }
//
// console.log(add1(1, 2));
//
// const add2 = (a, b) => {
//     return a + b;
// }

// const add3 = () => 42;
// const add4 = a => 42;
// const add5 = (a, b) => a + b;

// 'use strict';

// function max(arr){
//     let max = arr[0];
//     // for (let i = 1; i < arr.length; i++) {
//     //     if (arr[i] > max) {
//     //         max = arr[i];
//     //     }
//     // }
//     for (const digit of arr) {
//         if (digit > max) {
//             max = digit;
//         }
//     }
//     return max;
// }
//
// // to samo co wyżej, ale zapisane arrow function
// const max2 = coll => Math.max(...coll);
//
//
// console.log(max([1,2,3,4,5,2]));
// console.log(max2([1,2,3,4,5,2]));


function range(start, stop, step=1) {
    if (stop === undefined) {
        stop = start;
        start = 0;
    }

    let counter = start;

    const result = [];
    while (result.length < (stop - start) / step) {
        result.push(counter);
        counter += step;
    }

    return result;
}


console.log(range(5)) // [0, 1, 2, 3, 4]
console.log(range(1, 5)) // [1, 2, 3, 4]
console.log(range(2, 10, 2)) // [2, 4, 6, 8]
console.log(range(10, 5, -1)) // [10, 9, 8, 7, 6]


