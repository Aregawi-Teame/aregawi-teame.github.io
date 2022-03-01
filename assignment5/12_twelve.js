"use strict";
function findSecondBiggest(arr){
    let larg = arr[0];
    let secondLarg = larg;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>larg){
            secondLarg=larg;
            larg = arr[i];
        }
        if(arr[i]<larg && arr[i]>secondLarg){
            secondLarg = arr[i];
        }
    }
    return secondLarg;
}

console.log(findSecondBiggest([1,10,2,5,3,4]))