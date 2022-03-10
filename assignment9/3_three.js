"use strict";
function Person(name, dateOfBirth){
    this.name =name;
    this.dateOfBirth =dateOfBirth;
}

Person.prototype.toString = function(){
    const formatedDate = `${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}`;
    return `{ Name: ${this.name}, DateOfBirth: ${formatedDate}}`;
}

const months = ["January", "Ferbruary","March","April","May","June","July","August","September","October","November","December"];
const date = new Date(1985,months.indexOf("November"),10);

const peter = new Person("Peter", date)

console.log(peter.toString());