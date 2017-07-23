console.log("**** Solutions ****");
// Solution 1
let double = (value: number) => value * 2;
console.log(double(10));

// Solution 2
let greet = (name: string = "Max") => {
  console.log("Hello, " + name);
};
greet();
greet("Anna");

// Solution 3
let numbersE: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbersE));

// Solution 4
let newArray = [55, 20];
newArray.push(...numbersE);
console.log(newArray);

// Solution 5
let testResults = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Solution 6
let scientist = {firstName: "Will", experience: 12};
let {firstName, experience} = scientist;
console.log(firstName, experience);