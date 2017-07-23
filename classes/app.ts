// 1. Classes
  class Person {
    public name: string; //default public
    private type: string; // access from this object
    protected age: number = 27; // access from classes who inherit from this class

    // public username: string
    // shortcut: create the variable, pass parameter and assignt this.username = username.
    constructor (name: string, public username: string) { // create the public property in the class
      this.name = name;
    }

    printAge() {
      console.log(this.age);
      this.setType("Old guy");
    }

    private setType(type: string) {
      this.type = type;
      console.log(this.type);
    }
  }

  const person = new Person("Cristian", "xthecapx");
  console.log(person);
  //console.log(person.name, person.username);
  //person.printAge();
  //person.setType("Cool! "); //Error: private method
// ./ 1. Classes

// 2. Inheeritance
  class Max extends Person {
    //name = "Max";

    constructor(username: string) {
      super("Max", username);
      this.age = 31;
      // console.log(this.type); //Error: this variable is private for Person.
    }
  }

  const max = new Max("username");
  console.log(max);
// ./ 2. Inheeritance

// 3. Getters and Setters
  class Plant {
    private _species: string = "Default";

    get species() {
      return this._species;
    }

    set species(value: string) {
      if (value.length > 3) {
        this._species = value;
      } else {
        this._species = "Default";
      }
    }
  }

  let plant = new Plant();
  console.log(plant.species);
  plant.species = "AB";
  console.log(plant.species);
  plant.species = "Green Plant";
  console.log(plant.species);
// ./ 3. Getters and Setters

// 4. Static properties & Methods
  class Helpers {
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number {
      return this.PI * diameter;
    }
  }

  console.log("Helpers.PI", Helpers.PI);
  console.log("calcCircumference", Helpers.calcCircumference(8));
// ./ 4. Static properties & Methods

// 5. Abstract classes
  abstract class Project { // Needs to be instanciated.
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void; // Doesn't have body, needs to be implemented.

    calcBuget() {
      return this.budget * 2;
    }
  }

  class ITProject extends Project {
    changeName(name: string): void {
      this.projectName = name;
    }
  }

  //let newProject = new Project(); // Cannot create an instance of abstract class
  let newProject = new ITProject();
  console.log(newProject);
  newProject.changeName("Super IT Project");
  console.log(newProject);
// ./ 5. Abstract classes

// 6. Private constructors
  class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {}

    static getInstace() {
      if (!OnlyOne.instance) {
        OnlyOne.instance = new OnlyOne('The Only One');
      }
      return OnlyOne.instance;
    }
  }

  // let wrong = new OnlyOne('The Only One'); // Error: Constructor of class OnlyOne is private.
  let right = OnlyOne.getInstace();
  console.log(right.name);
  //right.name = 'Something else'; // Error: cannot assignt to a read-only property
// ./ 6. Private constructors