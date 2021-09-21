// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// not complited
// const getMaxArray = function(arrays) {
//     let max = arrays[0]
//     let second = arrays[0]
//     for(let i = 0; i < arrays.length; i++){
//         if(arrays[i] > max){
//             second = max;
//             max = arrays[i]
//         }else if(arrays[i] = max && arrays[i] > second){
//             second = arrays[i]
//             return second
//         }
//     }
    
// }

// let arrays = [ 15, 16, 95, 50, 70, 80] 
// console.log(getMaxArray(arrays)); 


// Developer Skills & Editor Setup
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK �

function printForecast (arr) {
    let str = ''
    for(let i = 0; i < arr.length; i++){
       str += `${arr[i]} ºC in ${i+1} day ... `
    }
    console.log('... ' + str); 
}
let arr = [12, 5, -5, 0, 4];
printForecast(arr)


