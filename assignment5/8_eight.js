"use strict";
const computeSumOfSquares = nums => nums.map(num=>num*num).reduce((prev,curre)=>prev+curre,0);
console.log(computeSumOfSquares([1,2,3]));