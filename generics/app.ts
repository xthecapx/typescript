// 1. Simple Generic
  function echo(data: any) {
    return data;
  }

  console.log(echo("Cristian"));
  console.log(echo(28));
  console.log(echo({name: "Cristian", age: 28}));
// ./ 1. Simple Generic

// 2. Better Generic way
  function betterEcho <T> (data: T) {
    return data;
  }

  console.log(betterEcho("Cristian").length);
  // console.log(betterEcho(28).length); // Error: length doesn't exists on type number
  // console.log(betterEcho({name: "Cristian", age: 28}).length); // Error: length doesn't exists on type Object
// ./ 2. Better Generic way

// 3. Built-in Generics
  const testResults: Array<number> = [1.94, 2.33];
  testResults.push(123);
  // testResults.push("asd"); // Type "asd" is not assignable to parameter type "number"

  console.log(testResults);
// ./ 3. Built-in Generics

// 4. Arrays
  function prinAll <G> (args: G[]) {
    args.forEach((el) => console.log(el));
  }

  prinAll<string>(["Apples", "Banana"]);
// ./ 4. Arrays

// 5. Generic Types
  const echo2: <M> (data: M) => M = betterEcho;

  console.log(echo2 <string> ("Something"));
// ./ 5. Generic Types

// 6. Generic Classes
  class SimpleMath <T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
      return +this.baseValue * +this.multiplyValue; // + specify that is a number
    };
  }

  // const simpleMath = new SimpleMath <boolean> (); // Error: bolean is not number | string
  const simpleMath = new SimpleMath <string, number> (); // Error: bolean is not number | string
  //simpleMath.baseValue = "some"; // Error: some is not a number
  simpleMath.baseValue = "10";
  simpleMath.multiplyValue = 20;
  console.log(simpleMath.calculate());
// ./ 6. Generic Classes