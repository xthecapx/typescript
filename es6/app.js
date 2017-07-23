// 1. let and const
console.log("1. let and const");
var variable = "Test";
console.log(variable);
variable = "Another variable";
console.log(variable);
var maxLevel = 100;
console.log(maxLevel);
// maxLevel = 99; // Error: cannot assignt to const or read-only
// ./ 1. let and const
// 2. Block scope
console.log("2. Block scope");
function reset() {
    //console.log(variable); //Error: Block-scoped variable used before its declaration
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// ./ 2. Block scope
// 3. Arrow functions
console.log("3. Arrow functions");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log("addNumbers: ", addNumbers(3, 10));
var multiplyNumbrs = function (number1, number2) { return number1 * number2; };
var multiplyNumbrsOld = function (number1, number2) {
    return number1 * number2;
};
console.log("multiplyNumbrs: ", multiplyNumbrs(3, 10));
var great = function () {
    console.log("Greatings!!");
};
great();
var greatFriend = function (friend) {
    console.log("Greatings " + friend);
};
greatFriend("Friend!!");
// ./ 3. Arrow functions
// 4. Default parameters
console.log("4. Default parameters");
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    console.log("start = ", start);
    while (start > 0) {
        start--;
    }
    console.log("Done! ", start);
};
countDown(20);
// countDown(); // Error: Expected 1 parameter but got 0
countDown();
// ./ 4. Default parameters
// 5. Rest and Spread operator: Works with arrays and list of data
console.log("5. Rest and Spread operator");
var numbers = [1, 10, 99, -5];
console.log("Parameters: ", Math.max(1, 10, 99, -5));
console.log("Numbers array: ", Math.max.apply(Math, numbers));
function makeArrayOld(args1, args2) {
    return [args1, args2];
}
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(name);
    return args;
}
console.log(makeArrayOld(1, 2));
console.log(makeArray("Cristian", 1, 2, 3, 4));
// ./ 5. Rest and Spread operator
// 6. Destructuring
console.log("6. Destructuring");
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0];
var hobby2 = myHobbies[1];
console.log("myHobbies", hobby1, hobby2);
var hobby1new = myHobbies[0], hobby2new = myHobbies[1];
console.log("myHobbies IE6", hobby1new, hobby2new);
var userData = { userName: "Max", age: 28 };
var localName = userData.userName, localAge = userData.age;
console.log("Object:", userData);
console.log("Destructuring:", localName, localAge);
// ./ 6. Destructuring
// 7. Template literals
console.log("7. Template literals");
var userName = "xthecapx";
var greeting = "Hello, I'm " + userName;
console.log(greeting);
var templateGreting = "This is a heading!\n  I'm " + userName + ".\n  This is cool!";
console.log(templateGreting);
// ./ 7. Template literals
