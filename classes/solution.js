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
// Exercise 1
var Car = (function () {
    function Car(name) {
        this.acceleration = 0;
    }
    ;
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);
// ./ Exercise 1
// Exercise 2 - Inheritance
var BaseObject = (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
;
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
// ./ Exercise 2
// Exercise 3 - Getters & Setters
var PersonSolution = (function () {
    function PersonSolution() {
        this._firstName = "";
    }
    Object.defineProperty(PersonSolution.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return PersonSolution;
}());
var personSolution = new PersonSolution();
console.log(personSolution.firstName);
personSolution.firstName = "Cri";
console.log(personSolution.firstName);
personSolution.firstName = "Cristian";
console.log(personSolution.firstName);
// ./ Exercise 3
