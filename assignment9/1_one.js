"use strict";
const person = {
    name: "",
    dateOfBirth: null,
    getName: function(){
        return this.name;
    },
    setName: function(newName){
        this.name = newName;
    }
}
const months = ["January", "Ferbruary","March","April","May","June","July","August","September","October","November","December"];
const date = new Date(1998,months.indexOf("December"),10);

const John = Object.create(person);
John.setName("John");
John.dateOfBirth=date;
console.log(`The person's name is ${John.getName()}`);
console.log(`${John.getName()} was born on ${John.dateOfBirth.getFullYear()}-${John.dateOfBirth.getMonth()+1}-${John.dateOfBirth.getDate()}`);



