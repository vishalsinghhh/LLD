import { EmailNotifcation } from "./EmailNotification";
import { SMSNotification } from "./SMSNotificaiton";
import { PushNotification } from "./PushNotification";

const type = "email"
let notification;

if(type === "email"){
    notification = new EmailNotifcation();
}else if(type === "sms"){
    notification = new SMSNotification();
}else if (type === "push"){
    notification = new PushNotification()
}else{
    throw new Error("Invalid notification type")
}

notification?.send("Hello Vishal")