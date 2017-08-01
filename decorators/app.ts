// Decorators: Add functionality to a class, extending.

// 1. Decorators for classes
  // Print the constructor of the class
  function logged(constructorFn: Function) {
    console.log(constructorFn);
  }

  @logged
  class Person {
    constructor() {
      console.log("Hi!");
    }
  }
// ./ 1. Decorators for classes

// 2. Factory
  function logging(value: boolean) {
    return value ? logged : null;
  }

  @logging(false)
  class Car {

  }
// ./ 2. Factory

// 3. Advaced
  function printable (constructorFn: Function) {
    constructorFn.prototype.print = function() {
      console.log(this);
    }
  }

  @logging(true)
  @printable
  class Plant {
    name = "Green Plant!"
  }

  const plant = new Plant();
  (<any>plant).print(); // Bug, you need to specify any to prevent error: print doesn't exists
// ./ 3. Advaced

// 4. Method & Property Decorators
  function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
      descriptor.writable = value; //Prevent overwrite method
    }
  }

  function overwritable(value: boolean) {
    return function(target: any, propName: string): any {
      const newDescriptor: PropertyDescriptor = {
        writable: value
      };

      return newDescriptor;
    }
  }

  class Project {
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
      this.projectName = name;
    }

    @editable(false)
    calcBudget() {
      console.log(1000);
    }
  }

  const project = new Project("Super project");
  project.calcBudget();
  project.calcBudget = function () {
    console.log(3000);
  }
  project.calcBudget();
  console.log(project);
// ./ 4. Method decorators

// 5. Parameter decorators
  function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
  }

  class Course {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
      if (printAll) {
        console.log(10000);
      } else {
        console.log(2000);
      }
    }
  }

  const course = new Course("New course");
  course.printStudentNumbers("any", true);
  course.printStudentNumbers("any", false);
// ./ 5. Parameter decorators