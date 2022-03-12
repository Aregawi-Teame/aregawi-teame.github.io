"use strict";

export class Patient{
    #patientId = null;
    #firstName = null;
    #middleName = null;
    #lastName = null;
    #dateOfBirth = null;
    #department = null;
    #outPatient = null;
    constructor(patientId, firstName, middleName, lastName){
        this.#patientId = patientId;
        this.#firstName = firstName;
        this.#middleName = middleName;
        this.#lastName = lastName;
    }
    getPatientId(){ return this.#patientId; }
    getFirstName(){ return this.#firstName; }
    getMiddleName(){ return this.#middleName; }
    getLastName(){ return this.#lastName; }
    getDateOfBirth(){ return this.#dateOfBirth; }
    getDepartment(){ return this.#department; }
    getOutPatient(){ return this.#outPatient; }

    getFullName(){ return `${this.#firstName} ${this.#lastName}`; }

    setPatientId(patientId){ this.#patientId = patientId; }
    setFirstName(firstName){ this.#firstName = firstName; }
    setMiddleName(middleName){ this.#middleName = middleName; }
    setLastName(lastName){ this.#lastName = lastName; }
    setDateofBirth(dateOfBirth){ this.#dateOfBirth = dateOfBirth; }
    setDepartment(department){ this.#department = department; }
    setOutPatient(outPatient){ this.#outPatient = outPatient; }

    toString(){
        return `{
            \nPatientID: ${this.#patientId},\n FirstName: ${this.#firstName}, \n MiddleName: ${this.#middleName},\n 
            LastName: ${this.#lastName}, \n DateOfBirth: ${this.#dateOfBirth}, \n Department: ${this.#dateOfBirth}, \n Is Out of Patient: ${this.#outPatient}
            }`
    }
}