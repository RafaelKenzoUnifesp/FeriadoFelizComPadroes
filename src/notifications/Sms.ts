import { Notification } from "../interfaces/Notification";

export class Sms implements Notification{
    public send(to: string, mensage: string): void {
        if(!to.trim()){
            throw new Error("O destinatário do email não pode ser vazio.");
        }
        console.log(`Enviado sms para ${to}: ${mensage}`);
    }

    public getChannel(): string {
        return "Sms";
    }
}
