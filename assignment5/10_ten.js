// Method one using imperetive programming
function computeSumOfEvenSquares (arr){
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(a[i] % 2 == 0) {
            sum += Math.pow(arr[i],2);
        }
        
    }
    return sum;
}

// Method two using declerative programming
const computeSumOfSquaresOfEvensOnly= arr => arr.filter(arr1=>arr1 % 2 ==0 ).map(arr1=>arr1*arr1).reduce((a, b)=> a+b, 0);

console.log ("The sum of squares using stream is " + computeSumOfSquaresOfEvensOnly ([1,2,3,4]));