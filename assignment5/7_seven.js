"use strict";
//Method one using for loop
var filterLongWords = function(words, len){
    let longestWords =[];
    for(let i=0;i<words.length;i++){
        if(words[i].length>len){
            longestWords.push(words[i]);
        }
    }

    return longestWords;
}

// Method two using filter()
var filterLongWords1 =(words, len) => words.filter(word=>word.length>len);

console.log(filterLongWords(["Aregawi","Heran","Yemane","Jon","Meresa"],5))
console.log(filterLongWords1(["Aregawi","Heran","Yemane","Jon","Meresa"],5));