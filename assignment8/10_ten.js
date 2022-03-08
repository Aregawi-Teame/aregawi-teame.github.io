const Employee = (function(){
    let name="";
    let age = -1;
    let salary = 0;
    const setAge = function(newAge){
        age = newAge;
    };
    const setSalary =  function(newSalary){
        salary = newSalary;
    };
    const setName = function(newName){
        name = newName;
    };
    function getAge(){
        return age;
    }
    function getSalary(){
        return salary;
    }
    function getName(){
        return name;
    }
    return{
        setAge:setAge,
        setSalary:setSalary,
        setName:setName,
        increaseSalary: function(percentage){
            salary= (getSalary()*percentage)/100 + getSalary();
            console.log(salary);
        },
        incrementAge: function(){
            age=getAge()+1;
            console.log(age);
        }
    }
})();

Employee.setAge(30);
Employee.setSalary(12000);
Employee.setName("Yemane Weleslasae");
Employee.increaseSalary(10);
Employee.incrementAge();