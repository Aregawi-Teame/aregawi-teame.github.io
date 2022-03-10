"use strict";

import { Person } from "./model/person.js";
import Employee  from "./model/employee.js";

const months = ["January", "Ferbruary","March","April","May","June","July","August","September","October","November","December"];
const persons = [
    new Person("Ana Smith", new Date(1998,months.indexOf("December"),15)),
    new Person("Bob Jone", new Date(1945, months.indexOf("November"), 16)),
    new Person("Carlos Slim Helu", new Date(1976,months.indexOf("September"),24))
];
for(let person in persons)
    console.log(persons[person].toString());

const employee = new Employee("Jim Hanson", new Date(1989,months.indexOf("April"), 20),245990.00, new Date(1998,months.indexOf("January"), 20));
employee.doJob("Software Engineer");