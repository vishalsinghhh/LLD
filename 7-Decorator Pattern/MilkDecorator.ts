import { CoffeeDecorator } from "./CoffeeDecorator";

export class MilkDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${this.coffee.getDescription()}, Milk`;
  }

  getCost(): number {
    return this.coffee.getCost() + 5;
  }
}
