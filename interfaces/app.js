// Interface: Contract of an object to say what it should have.
// Define a type to create this.
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: "Cristian",
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
//greet({ firstName: "Literal Cristian", age: 28, hobbies: ["Cooking", "Sports"] }); // Error: object literal may only specify know properties
greet(person);
changeName(person);
greet(person);
person.greet("Marquez");
// ./ 1. Object types.
// 2. Classes
var Person = (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    ;
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "New Person";
myPerson.lastName = "Set Lastname";
greet(myPerson);
myPerson.greet("Last Name");
var myDoubleFunction;
myDoubleFunction = function (number1, number2) {
    return number1 + number2 * 2;
};
console.log("3. Function types");
console.log(myDoubleFunction(2, 3));
var oldPerson = {
    age: 27,
    firstName: "Old Person",
    greet: function (lastName) {
        console.log(this.firstName, lastName);
    }
};
console.log("4. Interface Inheritance");
greet(oldPerson);
oldPerson.greet("lastname");
// ./ 4. Interface Inheritance 
