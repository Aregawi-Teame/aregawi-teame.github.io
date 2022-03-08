const counter = (function(){
    let privateCounter = 0;
    function make_adder(n){
        return function (){
            return n;
        }
    }
    const add5 = make_adder(5);
    const add7 = make_adder(7);
    return{
        add5: function(){
            privateCounter+=add5();
        },
        add7: function(){
            privateCounter+=add7();
        },
        value:function(){
            return privateCounter;
        },
        reset: function(){
            privateCounter=0;
        }
    };
})();

counter.add5();
counter.add5();
counter.add5();
console.log(counter.value());

counter.reset();
counter.add7();
counter.add7();
counter.add7();

console.log(counter.value());
