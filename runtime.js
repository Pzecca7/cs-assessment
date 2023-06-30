const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(999);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// 3.)

//       tinyArray: insert = 18.6 us     | append = 46.7 us
//      smallArray: insert = 22.9 us     | append = 51.6 us
//     mediumArray: insert = 89.3 us     | append = 71.3 us
//      largeArray: insert = 4.2588 ms   | append = 300.1 us
// extraLargeArray: insert = 433.5581 ms | append = 1.8741 ms

//---------------------------------------------------------------------------------------------

// 4.) Based on the results, the insert function is slightly faster than the append function when the array is small or tiny, but is much slower than the append function when the array is large or extra large. The insert function has a linear runtime complexity whereas the append function has a constant runtime complexity. This means the append function scales better since at larger numbers ( which can go up infinetly) it is way more efficient than the insert function.

// 5.) The insert function is so much slower than the append function simply because the insert function uses the array.unshift() method while the append function used the array.push() method. The .push() method only adds an element and gives it an index that's one greater than the last element in the array. It doesnt matter if the array has 100 elements or 1,000,000 elements, it will just assign the index one greater than the last everytime. The .unshift mehtod differs in that it adds the element at the beginning of the array so it will always be assigned the index of 0 causing every other element's index to shift by one. This is problematic when dealing with very larger arrays because it may have the shift the index of millions of elements.

// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
