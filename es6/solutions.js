console.log("**** Solutions ****");
// Solution 1
var double = function (value) { return value * 2; };
console.log(double(10));
// Solution 2
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
// Solution 3
var numbersE = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbersE));
// Solution 4
var newArray = [55, 20];
newArray.push();
Array.prototype.push.apply(newArray, numbersE);
console.log(newArray);
// Solution 5
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Solution 6
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
