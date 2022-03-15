const make_adder = function(inc){
    let privateCounter = 0;
    function add(){
        privateCounter+=inc
    }
    return {
        add:add,
        value: function(){
            return privateCounter;
        }
}
}
const add5 = make_adder(5);
add5.add();
add5.add()
add5.add();
console.log(add5.value());
const add7 = make_adder(7);
add7.add();
add7.add();
add7.add()
console.log(add7.value());
// const make_adder = function(inc){
//     let counter = 0;
//     const add = function(){
//         counter+=inc;
//         return counter;
//     }
//     return add;
// };
// const add5 = make_adder(5);
// add5();
// add5();
// console.log(add5());
// const add7 = make_adder(7);
// add7();
// add7();
// console.log(add7());
