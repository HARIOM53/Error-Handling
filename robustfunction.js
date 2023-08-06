function getperson(obj){
    try {
        if ( typeof obj !== 'object' || obj === null || !('name' in obj) || !('age' in obj)){
            throw new Error('Invalid Parameter Type');
        } 
        const name = obj.name;
        const age = obj.age;

        return `Name: ${name}, Age: ${age}`;
    } catch (error) {
        return error.message;
    }
}

console.log(getperson({name: "Mithun", age: 20 }));
console.log(getperson({name: "Mithun"}));
console.log(getperson(["Mithun",20 ]));