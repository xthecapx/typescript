// 1. Variables
// string
var myName = 'Max';
//myName = 28;
//number
var myAge = 27.5; //No difference between int and float
//myAge = 'Max';
//boolean
var hasHobbies = false;
//hasHobbies = 1; //1 is a nomber not boolean
// assign types
var myRealAge;
myRealAge = 27;
//myRealAge = '27';
// array
var hobbies = ["Cooking", "sports"];
hobbies = [100]; // Array of stings
//hobbies = 100; // Array of any[]
console.log(typeof hobbies);
// tuples: Arrays with mix types and limited number of items.
var address = ["Suprestreet", 99];
//let address: [string, number] = [99, "Suprestreet"]; // Error, order is important
// Enum: make numbers more expresives. They are default values to refers numbers.
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow";
    Color[Color["Purple"] = 3] = "Purple"; // 3
})(Color || (Color = {}));
;
var myColor = Color.Green;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// ./ 1. Variables
// 2. functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
    //return "cristian"; //Error, void doesn't return.
}
// arguments types
function multiply(v1, v2) {
    return v1 * v2;
}
//console.log(multiply(2, 'Max')); // 'Max' is not a number
console.log(multiply(2, 2));
// ./ 2. functions
// 3. Functions types
// The order of the parameters is important
var myMultiply; // function with two parameters and return number
console.log("myMultiply");
//myMultiply = sayHello; // Error: sayHello return void
//myMultiply(); //Expected two parameters got 0
myMultiply = multiply;
console.log(myMultiply(5, 2));
// ./ 3. Functions types
// 4. Objects: Name of propertys are important.
// The name of the propertys is important
var userData = {
    name: 'Max',
    age: 27
};
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// ./ 4. Objects
// 5. Union types
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = true; // Error: is not number or string
// ./ 5. Union types
// 6. Check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
// ./ 6. Check types 
