// $: tsc <input-file> --outFile <output-file> -w

/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

import circleMath = MyMath.Circle; // Setting an alias

const PI = 2.99;

console.log(MyMath.calculateRectangle(10, 20));
console.log(circleMath.calculateCircunference(10));
console.log(PI);