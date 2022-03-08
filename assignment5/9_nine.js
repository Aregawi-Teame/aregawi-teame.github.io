"use strict";
// Method 1 using for loop
var printOddNumbersOnly = function(nums){
    let ods =[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2!=0){
            ods.push(nums[i]);
        }
    }
    return ods;
}
// Method two using filter;
const printOddNumbersOnly1 = nums=>nums.filter(num=>num%2!=0);

console.log(printOddNumbersOnly([5,4,8,13,7,6]));
console.log(printOddNumbersOnly1([5,4,8,13,7,6]));

const sumCalc = function() {
    return Array.from(arguments).reduce((sum,n) => sum+n,0);
}
console.log(sumCalc(1,2,3));