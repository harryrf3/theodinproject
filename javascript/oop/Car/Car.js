class Car {
  // creates the 'template' for a car
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 10;
  }

  getSpeed() {
    return this.speed;
  }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.accelerate();
myCar.accelerate();
console.log(myCar.getSpeed()); // Output: 20