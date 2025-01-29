// index.ts
import { SimpleCoffee } from "./SimpleCoffee";
import { MilkDecorator } from "./MilkDecorator";
import { SugarDecorator } from "./SugarDecorator";
import { CaramelDecorator } from "./CaramelDecorator";

const coffee = new SimpleCoffee();
console.log(`${coffee.getDescription()} costs $${coffee.getCost()}`);

const coffeeWithMilk = new MilkDecorator(coffee);
console.log(`${coffeeWithMilk.getDescription()} costs $${coffeeWithMilk.getCost()}`);

const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);
console.log(`${coffeeWithMilkAndSugar.getDescription()} costs $${coffeeWithMilkAndSugar.getCost()}`);

const fancyCoffee = new CaramelDecorator(coffeeWithMilkAndSugar);
console.log(`${fancyCoffee.getDescription()} costs $${fancyCoffee.getCost()}`);
