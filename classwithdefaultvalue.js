class person {
    constructor(name = "Unknown", age = 0) {
        this.name = name
        this.age = age
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}.`
    }
}

// Example

const person1 = new person("Mithun", 20);
console.log(person1.getDetails());

const person2 = new person();
console.log(person2.getDetails());