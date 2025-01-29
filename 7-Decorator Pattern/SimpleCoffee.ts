import { ICoffee } from "./ICoffee";

export class SimpleCoffee implements ICoffee{
    getDescription(): string {
        return "Simple Coffee"
    }

    getCost(): number {
        return 5
    }
}