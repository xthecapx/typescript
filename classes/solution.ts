// Exercise 1
  class Car {
    acceleration: number = 0;

    constructor(name: string) {};

    honk() {
      console.log("Toooooooooot!");
    }

    accelerate(speed: number) {
      this.acceleration = this.acceleration + speed;
    }
  }

  let car = new Car("BMW");
  car.honk();
  console.log(car.acceleration);
  car.accelerate(20);
  console.log(car.acceleration);
// ./ Exercise 1

// Exercise 2 - Inheritance
  class BaseObject {
    width: number = 0;
    length: number = 0;
  };

  class Rectangle extends BaseObject {
    calcSize() {
      return this.width * this.length;
    }
  }

  const rectangle = new Rectangle();
  rectangle.width = 5;
  rectangle.length = 10;
  console.log(rectangle.calcSize());
// ./ Exercise 2

// Exercise 3 - Getters & Setters
  class PersonSolution {
    private _firstName: string = "";

    get firstName() {
      return this._firstName;
    }

    set firstName(value: string) {
      if (value.length > 3) {
        this._firstName = value;
      } else {
        this._firstName = "";
      }
    }
  }

  let personSolution = new PersonSolution();
  console.log(personSolution.firstName);
  personSolution.firstName = "Cri";
  console.log(personSolution.firstName);
  personSolution.firstName = "Cristian";
  console.log(personSolution.firstName);
// ./ Exercise 3
