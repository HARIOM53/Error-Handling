class Employee {
    constructor(name, position, salary){
        this.name = name
        this.position = position
        this.salary = salary
    }
    getSalary() {
        return this.salary;

    }
}

// Example
const employee1 = new Employee("krishnakant", "FSWD", 80000 );

const salary = employee1.getSalary();
console.log(salary);