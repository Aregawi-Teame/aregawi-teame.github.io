var count = (function(){
    var counter = 0;
    var add = function(){
        counter++;
    }
    var reset = function(){
        counter = 0;
    }
    var value = function(){
        return counter;
    }
    return{
        add: add,
        reset: reset,
        value: value
    }
})();
console.log(count.value());
count.add();
count.add();
console.log(count.value());
count.reset();
console.log(count.value());