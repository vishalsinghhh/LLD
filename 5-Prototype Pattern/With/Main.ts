import { Car } from "./Car";

const car1 = new Car("Tata", "S2", 2024)
console.log(car1);

const car2 = car1.clone()
car2.year = 2025
console.log(car2);


const car3 = car2.clone()
car3.make = "Mahindra"
console.log(car3);
