import { CoffeeDecorator } from "./CoffeeDecorator";

export class SugarDecorator extends CoffeeDecorator{
    getDescription(): string {
        return `${this.coffee.getDescription()}, Sugar`
    }

    getCost(): number {
        return this.coffee.getCost()+1
    }
}