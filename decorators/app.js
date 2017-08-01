// Decorators: Add functionality to a class, extending.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 1. Decorators for classes
// Print the constructor of the class
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person = (function () {
    function Person() {
        console.log("Hi!");
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// ./ 1. Decorators for classes
// 2. Factory
function logging(value) {
    return value ? logged : null;
}
var Car = (function () {
    function Car() {
    }
    Car = __decorate([
        logging(false)
    ], Car);
    return Car;
}());
// ./ 2. Factory
// 3. Advaced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = (function () {
    function Plant() {
        this.name = "Green Plant!";
    }
    Plant = __decorate([
        logging(true),
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print(); // Bug, you need to specify any to prevent error: print doesn't exists
// ./ 3. Advaced
// 4. Method & Property Decorators
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value; //Prevent overwrite method
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project = (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(false)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project("Super project");
project.calcBudget();
project.calcBudget = function () {
    console.log(3000);
};
project.calcBudget();
console.log(project);
// ./ 4. Method decorators
// 5. Parameter decorators
function printInfo(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}
var Course = (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("New course");
course.printStudentNumbers("any", true);
course.printStudentNumbers("any", false);
// ./ 5. Parameter decorators 
