"use strict";
const max = (num1, num2, num3) => num1>num2 ? (num1>num3 ? num1 : num3) : num2>num3 ? num2 : num3;

console.log("The maximum number is " + max(99,34,100));