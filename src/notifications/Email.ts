import { Notification } from "../interfaces/Notification";

export class Email implements Notification{
    public send(to: string, mensage: string): void {
        if(!to.trim()){
            throw new Error("O destinatário do email não pode ser vazio.");
        }
        console.log(`Enviado email para ${to}: ${mensage}`);
    }

    public getChannel(): string {
        return "Email";
    }
}