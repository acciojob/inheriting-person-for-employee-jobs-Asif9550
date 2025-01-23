// Define the Person class
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Define the Employee class, inheriting from Person
function Employee(name, age, jobTitle) {
    // Call the Person constructor with the name and age
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Set up inheritance so Employee inherits from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function () {
    console.log(
        `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
