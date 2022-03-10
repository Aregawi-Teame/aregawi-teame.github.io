"use strict";
import { Person } from "./person.js";

 class Employee extends Person {
    constructor(name, dob, salary, hireDate){
        super(name, dob);
        this.salary = salary;
        this.hireDate = hireDate;
    }
    doJob(jobTitle){
        const formmatedSalary = new Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD'}).format(this.salary);
        console.log(`${this.getName()} is a ${jobTitle} who earns ${formmatedSalary}`);
    }
}

export default Employee;

