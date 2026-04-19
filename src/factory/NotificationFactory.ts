import { Notification } from "../interfaces/Notification";
import { Email } from "../notifications/Email";
import { Sms } from "../notifications/Sms";

export class NotificationFactory {
    public static createN(type: string): Notification {
        switch(type.toLowerCase()){
            case "email":
                return new Email();
            case "sms":
                return new Sms();
            default:
                throw new Error("Tipo de notificação não aceito");
        }
    }
}
