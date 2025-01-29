import { ICoffee } from "./ICoffee";

export abstract class CoffeeDecorator implements ICoffee {
  protected coffee: ICoffee;

  constructor(coffee: ICoffee) {
    this.coffee = coffee;
  }

  getDescription(): string {
    return this.coffee.getDescription();
  }

  getCost(): number {
    return this.coffee.getCost();
  }
}
