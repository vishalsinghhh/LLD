// Without LSP: Subclasses break expected behaviour
// class Bird{
//     fly(){
//         console.log("Bird flys");
        
//     }
// }

// class Penguin extends Bird{
//     fly(){
//         throw new Error("Penguins do not fly")
//     }
// }

// using LSP

interface Bird{
    layEggs():void
}

interface FlyingBird extends Bird{
    fly():void
}

class Sparrow implements FlyingBird{
    layEggs(): void {
        console.log("Sparrow lay eggs");
        
    }
    fly(): void {
        console.log("Sparrow fly");
        
    }
}

class Penguin implements Bird{
    layEggs(): void {
        console.log("Penguin lay eggs");
        
    }
}

// Usage
const birds: Bird[] = [new Sparrow(), new Penguin()]
birds.forEach((bird)=>bird.layEggs())