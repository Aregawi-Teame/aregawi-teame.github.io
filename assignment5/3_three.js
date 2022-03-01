"use strict";
const regEx = /^[aoieu]$/;
const isVowel = cha => regEx.test(cha.toLowerCase());
console.log(isVowel("o"));