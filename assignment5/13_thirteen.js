var printFibo = function(n,num1,num2){
    fib = [];
    if(n>=2){
        fib[0]=num1;
        fib[1]=num2;
        for(let i=2;i<n;i++){
            fib[i] = fib[i-2] + fib[i-1];
        }
    }
    if(n>0 && n<2){
        fib[0]=num1;
    }
    return fib;
}
console.log(printFibo(10,0,1));
console.log(printFibo(1,0,1));