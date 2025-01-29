// CaramelDecorator.ts
import { CoffeeDecorator } from "./CoffeeDecorator";

export class CaramelDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${this.coffee.getDescription()}, Caramel`;
  }

  getCost(): number {
    return this.coffee.getCost() + 3; // Adding caramel costs $3
  }
}
