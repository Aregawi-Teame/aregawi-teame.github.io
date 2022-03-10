export class Person{
    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    getName(){
        return this.name;
    }
    setName(newName){
        this.name= newName;
    }
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    setDateOfBirth(newDate){
        this.dateOfBirth = newDate;
    }
    toString(){
        const date = this.getDateOfBirth();
        let month = date.getMonth()+1;
        month = month.toString().length==1 ? 0 + month.toString() : month.toString();
        return `{Name: ${this.getName()}, DateOfBirth: ${date.getFullYear()}-${month}-${date.getDate()}}`;
    }
}

