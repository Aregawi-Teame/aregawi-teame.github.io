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

const employee =  {
    salary: 0,
    hireDate: new Date(),
    doJob: function(jobTitle) {
        const formmatedSalary = new Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD'}).format(this.salary);
        console.log(`${this.getName()} is a ${jobTitle} who earns ${formmatedSalary}`);
    }
}

Object.setPrototypeOf(employee, person);

const anna = Object.create(employee);
anna.setName("Anna");
anna.salary =240995.50;
anna.doJob("Programmer"); 