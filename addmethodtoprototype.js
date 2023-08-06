function student(name){
    this.name = name;
}

student.prototype.printDetails = function(){

    console.log("Hello, my name is " + this.name);

}

const Student = new student("Mithun");
Student.printDetails();
