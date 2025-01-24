// S - Single responsibility principle

// BAD - using the same class for multiple feature
class userManager{
    createUser(email:string){
        console.log(`User created: ${email}`);
        
    }

    sendWelcomeEmail(email:string, msg:string){
        console.log(`Welcom ${email}: ${msg}`);
        
    }
}

class userCreator{
    createUser(email:string){
        console.log(`User created: ${email}`);
        
    }
}

class sendEmail{
    sendWelcomeEmail(email:string, msg:string){
        console.log(`Welcom ${email}: ${msg}`);
        
    }
}

const user = new userCreator()
user.createUser("vishal@razorpay.com")

const email = new sendEmail()
email.sendWelcomeEmail('vishal@razorpay.com', 'Welcome to razorpay')