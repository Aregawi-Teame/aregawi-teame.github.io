"use strict";
const findLongestWord = arr=>arr.reduce((maxWord, curreWord) => maxWord=maxWord.length<curreWord.length ? curreWord : maxWord);
const longestWord = findLongestWord(["Yemane", "ea", "aee","Aregawi"]);
console.log("The longest word ever in th array is "+ longestWord);