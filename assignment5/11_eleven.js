"use strict";
// Sum
const sum = nums=>nums.reduce((previousV,currentV)=>previousV+currentV,0);
console.log(sum([1,2,3,4,5]));

// Multiply
const mult = nums => nums.reduce((prev,curr)=>prev*curr,1);
console.log(mult([1,2,3,4,5]));