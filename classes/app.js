var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Classes
var Person = (function () {
    // public username: string
    // shortcut: create the variable, pass parameter and assignt this.username = username.
    function Person(name, username) {
        this.username = username;
        this.age = 27; // access from classes who inherit from this class
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Cristian", "xthecapx");
console.log(person);
//console.log(person.name, person.username);
//person.printAge();
//person.setType("Cool! "); //Error: private method
// ./ 1. Classes
// 2. Inheeritance
var Max = (function (_super) {
    __extends(Max, _super);
    //name = "Max";
    function Max(username) {
        var _this = _super.call(this, "Max", username) || this;
        _this.age = 31;
        return _this;
        // console.log(this.type); //Error: this variable is private for Person.
    }
    return Max;
}(Person));
var max = new Max("username");
console.log(max);
// ./ 2. Inheeritance
// 3. Getters and Setters
var Plant = (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
// ./ 3. Getters and Setters
// 4. Static properties & Methods
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log("Helpers.PI", Helpers.PI);
console.log("calcCircumference", Helpers.calcCircumference(8));
// ./ 4. Static properties & Methods
// 5. Abstract classes
var Project = (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBuget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
//let newProject = new Project(); // Cannot create an instance of abstract class
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
// ./ 5. Abstract classes
// 6. Private constructors
var OnlyOne = (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstace = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The Only One'); // Error: Constructor of class OnlyOne is private.
var right = OnlyOne.getInstace();
console.log(right.name);
//right.name = 'Something else'; // Error: cannot assignt to a read-only property
// ./ 6. Private constructors 
