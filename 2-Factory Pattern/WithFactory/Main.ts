import { NotificationFactory } from "./NotificationFactory";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the notification type (email, sms, push): ", (type)=>{
    try {
        const notification = NotificationFactory.sendNotificationByType(type)

        rl.question("Enter the message to send ", (message)=>{
            notification.send(message)
            rl.close()
        })
    } catch (error:any) {
        console.error(error.message)
        rl.close()
    }
})