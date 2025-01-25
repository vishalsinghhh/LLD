import { EmailNotifcation } from "./EmailNotification";
import { SMSNotification } from "./SMSNotification";
import { PushNotifation } from "./PushNotification";

export class NotificationFactory{
    static sendNotificationByType(type:string):EmailNotifcation | SMSNotification | PushNotifation{
        switch(type){
            case "email":
                return new EmailNotifcation()
            case "sms":
                return new SMSNotification()
            case "push":
                return new PushNotifation()
            default:
                throw new Error("Invalid notification type")
        }
    }
}