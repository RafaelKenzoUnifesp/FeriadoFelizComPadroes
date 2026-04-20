import { Payment } from "../interfaces/Payment";
import { Boleto } from "../payments/Boleto";
import { Pix } from "../payments/Pix";
import { Card } from "../payments/Card";

export class PaymentFactory {
    public static createP(type: string): Payment{
        switch(type.toLowerCase()){
            case "boleto":
                return new Boleto();
            case "pix":
                return new Pix();
            case "card":
                return new Card();
            default:
                throw new Error(`Tipo de pagamento não aceito: ${type}`);
        }
    }
}
