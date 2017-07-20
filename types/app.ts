// 1. Variables
  // string
  let myName: string = 'Max';
  //myName = 28;

  //number
  let myAge: number = 27.5; //No difference between int and float
  //myAge = 'Max';

  //boolean
  let hasHobbies = false;
  //hasHobbies = 1; //1 is a nomber not boolean

  // assign types
  let myRealAge: number;
  myRealAge = 27;
  //myRealAge = '27';

  // array
  let hobbies: any[] = ["Cooking", "sports"];
  hobbies = [100]; // Array of stings
  //hobbies = 100; // Array of any[]
  console.log(typeof hobbies);

  // tuples: Arrays with mix types and limited number of items.
  let address: [string, number] = ["Suprestreet", 99];
  //let address: [string, number] = [99, "Suprestreet"]; // Error, order is important

  // Enum: make numbers more expresives. They are default values to refers numbers.
  enum Color {
    Gray, // 0
    Green = 100, // 1
    Blue, // 101
    Yellow = 2, // 2
    Purple // 3
  };

  let myColor: Color = Color.Green;
  console.log(myColor);

  // any
  let car: any = "BMW";
  console.log(car);
  car = {brand: "BMW", series: 3};
  console.log(car);
// ./ 1. Variables

// 2. functions
  function returnMyName(): string {
    return myName;
  }
  console.log(returnMyName());

  // void
  function sayHello(): void {
    console.log("Hello!");
    //return "cristian"; //Error, void doesn't return.
  }

  // arguments types
  function multiply(v1: number, v2: number): number {
    return v1 * v2;
  }

  //console.log(multiply(2, 'Max')); // 'Max' is not a number
  console.log(multiply(2, 2));
// ./ 2. functions

// 3. Functions types
  // The order of the parameters is important
  let myMultiply: (a: number, b: number) => number; // function with two parameters and return number
  console.log("myMultiply");
  //myMultiply = sayHello; // Error: sayHello return void
  //myMultiply(); //Expected two parameters got 0
  myMultiply = multiply;
  console.log(myMultiply(5, 2));
// ./ 3. Functions types

// 4. Objects: Name of propertys are important.
  // The name of the propertys is important
  let userData: { name: string, age: number } = {
    name: 'Max',
    age: 27
  };
  // userData = {}; // Error: Object {name: string, age: number }
  // userData = {a: "Hello", b: 22}; // Error: Object literal may only specify known properties

  // Complex object
  // Object: two propertys
    // data: array of Numbers
    // output: function with one boolean argument and return array of numbers.

  // type alias
  type Complex = {data: number[], output: (all: boolean) => number[]};

  let complex: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
      return this.data
    }
  };

  let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
      return this.data
    }
  };
// ./ 4. Objects

// 5. Union types
  let myRealRealAge: number | string = 27;
  myRealRealAge = "27";
  // myRealRealAge = true; // Error: is not number or string
// ./ 5. Union types

// 6. Check types
  let finalValue = 30;
  if (typeof finalValue == "number") {
    console.log("Final value is a number");
  }
// ./ 6. Check types

// 7. Never type
  // Dont return any. You may use in function who won't execute.
  function neverReturns(): never {
    throw new Error("An error!");
  }
// ./ 7. Never type

// 8. Nullable types
  // "compilerOptions": { "strictNullChecks": true }
  let canBeNull: number | null = 12;
  canBeNull = null; // Type null is not assignable to type 'number'

  let canAlsoBeNull;
  canAlsoBeNull = null;

  let canThisBeAny = null; // null is the default value of this variable
  // canThisBeAny = 12; // type 12 is not assignable to type 'null'
// ./ 8. Nullable types