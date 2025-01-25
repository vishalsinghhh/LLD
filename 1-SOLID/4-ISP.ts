// interface Employee {
//   work(): void;
//   eat(): void;
// }

// class Developer implements Employee {
//   work() {
//     console.log("Coding");
//   }
//   eat() {
//     console.log("Eating lunch");
//   }
// }

// class Robot implements Employee{
//     work() {
//         console.log("Coding");
//       }
//       eat() {
//         throw new Error("Eating lunch");
//       }
// }

interface Worable{
    work():void
}

interface Eatable{
    eat():void
}

class Developer implements Worable, Eatable{
    work(): void {
        console.log("Coding");
        
    }
    eat(): void {
        console.log("Eating");
        
    }
}

class Robot implements Worable{
    work(): void {
        console.log("Coding");
    }
}

const workers:Worable[] = [new Developer(), new Robot()]
workers.forEach((worker)=>worker.work())