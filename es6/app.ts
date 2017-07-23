// 1. let and const
  console.log("1. let and const");
  let variable = "Test";
  console.log(variable);
  variable = "Another variable";
  console.log(variable);

  const maxLevel = 100;
  console.log(maxLevel);
  // maxLevel = 99; // Error: cannot assignt to const or read-only
// ./ 1. let and const

// 2. Block scope
  console.log("2. Block scope");
  function reset() {
    //console.log(variable); //Error: Block-scoped variable used before its declaration
    let variable = null;
    console.log(variable);
  }
  reset();
  console.log(variable);
// ./ 2. Block scope

// 3. Arrow functions
  console.log("3. Arrow functions");
  const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
  }
  console.log("addNumbers: ", addNumbers(3, 10));

  const multiplyNumbrs = (number1: number, number2: number) => number1 * number2;
  const multiplyNumbrsOld = (number1: number, number2: number) => {
    return number1 * number2;
  }
  console.log("multiplyNumbrs: ", multiplyNumbrs(3, 10));

  const great = () => {
    console.log("Greatings!!");
  }
  great();

  const greatFriend = friend => { //Cant use parameters type with this form
    console.log("Greatings " + friend);
  }
  greatFriend("Friend!!");
// ./ 3. Arrow functions

// 4. Default parameters
  console.log("4. Default parameters");
  const countDown = (start: number = 10): void => {
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
  const numbers = [1, 10, 99, -5];
  console.log("Parameters: ", Math.max(1, 10, 99, -5));
  console.log("Numbers array: ", Math.max(...numbers));

  function makeArrayOld (args1: number, args2: number) {
    return [args1, args2];
  }
  function makeArray (name: string, ...args: number[]) {
    console.log(name);
    return args;
  }

  console.log(makeArrayOld(1, 2));
  console.log(makeArray("Cristian", 1, 2, 3, 4));
// ./ 5. Rest and Spread operator

// 6. Destructuring
  console.log("6. Destructuring");
  const myHobbies = ["Cooking", "Sports"];
  const hobby1 = myHobbies[0];
  const hobby2 = myHobbies[1];
  console.log("myHobbies", hobby1, hobby2);

  const [hobby1new, hobby2new] = myHobbies;
  console.log("myHobbies IE6", hobby1new, hobby2new);

  const userData = {userName: "Max", age: 28};
  const {userName: localName, age: localAge} = userData;
  console.log("Object:", userData)
  console.log("Destructuring:", localName, localAge);
// ./ 6. Destructuring

// 7. Template literals
  console.log("7. Template literals");
  const userName = "xthecapx";
  const greeting = "Hello, I'm " + userName;
  console.log(greeting);
  const templateGreting = `This is a heading!
  I'm ${userName}.
  This is cool!`;
  console.log(templateGreting);
// ./ 7. Template literals
