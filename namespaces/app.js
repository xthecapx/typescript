var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateCircunference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircunference = calculateCircunference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
// $: tsc <input-file> --outFile <output-file> -w
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
var circleMath = MyMath.Circle; // Setting an alias
var PI = 2.99;
console.log(MyMath.calculateRectangle(10, 20));
console.log(circleMath.calculateCircunference(10));
console.log(PI);
