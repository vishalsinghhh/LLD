// Without Dependency Inversion Principle(DIP)

// class BackendDeveloper{
//     develop(){
//         console.log("Writing backend code");

//     }
// }

// class FrontendDeveloper{
//     develop(){
//         console.log("Writing frontend code");

//     }
// }

// class Project{
//     backendDeveloper:BackendDeveloper
//     frontendDeveloper:FrontendDeveloper

//     constructor(){
//         this.backendDeveloper = new BackendDeveloper
//         this.frontendDeveloper = new FrontendDeveloper()
//     }

//     develop(){
//         this.backendDeveloper.develop()
//         this.frontendDeveloper.develop()
//     }
// }

interface DeveloperWork {
    develop():void
}

class BackendDeveloper implements DeveloperWork{
    develop(): void {
        console.log("this is backend development");
        
    }
}

class FrontendDeveloper implements DeveloperWork{
    develop(): void {
        console.log("this is frontend development");
        
    }
}

class Project{
    developers: DeveloperWork[]

    constructor(developers:DeveloperWork[]){
        this.developers = developers
    }

    develop(){
        this.developers.forEach((developer)=>developer.develop())
    }
}

const project = new Project([new BackendDeveloper(), new FrontendDeveloper()])
project.develop()