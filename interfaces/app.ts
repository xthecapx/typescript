// Interface: Contract of an object to say what it should have.
// Define a type to create this.

// 1. Object types.
  interface NamedPerson {
    firstName: string;
    age?: number; // Optional argument
    [propName: string]: any; // Optional argumenst with type 'string' on key and 'any' on value
    greet(lastName: string): void;
  }

  function greet(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
  }

  function changeName(person: NamedPerson) {
    person.firstName = "Anna";
  }

  const person: NamedPerson = {
    firstName: "Cristian",
    hobbies: ["Cooking", "Sports"],
    greet(lastName: string) {
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
  class Person implements NamedPerson {
    firstName: string;
    lastName: string;
    greet(lastName: string) {
      console.log("Hi, I am " + this.firstName + " " + lastName);
    };
  }

  const myPerson = new Person();
  myPerson.firstName = "New Person";
  myPerson.lastName = "Set Lastname";
  greet(myPerson);
  myPerson.greet("Last Name");
// ./ 2. Classes

// 3. Function types
  interface DoubleValueFunc {
    (a: number, b: number): number;
  }

  let myDoubleFunction: DoubleValueFunc;

  myDoubleFunction = function(number1: number, number2: number) {
    return number1 + number2 * 2;
  }
  console.log("3. Function types");
  console.log(myDoubleFunction(2, 3));
// ./ Function types

// 4. Interface Inheritance
  interface AgedPerson extends NamedPerson {
    age: number; //Optional in NamedPerson
  }

  const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Old Person",
    greet(lastName: string) {
      console.log(this.firstName, lastName);
    }
  }

  console.log("4. Interface Inheritance");
  greet(oldPerson);
  oldPerson.greet("lastname");
// ./ 4. Interface Inheritance