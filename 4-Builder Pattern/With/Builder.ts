import { CarBuilder } from "./CarBuilder";

const car = new CarBuilder()
    .setBrand("Tesla")
    .setModel("Model S")
    .setEngine("Electric")
    .setSunroof(true)
    .setColor("Red")
    .build()


console.log(car);
