export class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  clone() {
    return new Car(this.make, this.model, this.year);
  }
}
