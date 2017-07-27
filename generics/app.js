// 1. Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Cristian"));
console.log(echo(28));
console.log(echo({ name: "Cristian", age: 28 }));
// ./ 1. Simple Generic
// 2. Better Generic way
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Cristian").length);
// console.log(betterEcho(28).length); // Error: length doesn't exists on type number
// console.log(betterEcho({name: "Cristian", age: 28}).length); // Error: length doesn't exists on type Object
// ./ 2. Better Generic way
// 3. Built-in Generics
var testResults = [1.94, 2.33];
testResults.push(123);
// testResults.push("asd"); // Type "asd" is not assignable to parameter type "number"
console.log(testResults);
// ./ 3. Built-in Generics
// 4. Arrays
function prinAll(args) {
    args.forEach(function (el) { return console.log(el); });
}
prinAll(["Apples", "Banana"]);
// ./ 4. Arrays
// 5. Generic Types
var echo2 = betterEcho;
console.log(echo2("Something"));
// ./ 5. Generic Types
// 6. Generic Classes
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // + specify that is a number
    };
    ;
    return SimpleMath;
}());
// const simpleMath = new SimpleMath <boolean> (); // Error: bolean is not number | string
var simpleMath = new SimpleMath(); // Error: bolean is not number | string
//simpleMath.baseValue = "some"; // Error: some is not a number
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
// ./ 6. Generic Classes 
