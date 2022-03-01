//Method one using reduce function
var reverse = s =>[].reduceRight.call(s,(a,b)=>a+b);
console.log(reverse("jag testar"));

// Method two using loop and string function
var reverse1 = function(s){
    let str = s;
    let reversed ="";
    for(let i=str.length;i>0;i--){
        let newstr = str.substring(0,i);
        reversed+=newstr.substr(-1,1);
    }
    return reversed;
}

console.log(reverse1("jag testar"));