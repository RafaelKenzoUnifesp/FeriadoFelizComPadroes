import { Payment } from "../interfaces/Payment";

export class Pix implements Payment {
    public pay(amount: number): boolean {
        if(amount <= 0){
            return false;
    }
    console.log(`Pagamento por pix realizado no valor ${amount.toFixed(2)}`);
    return true;
    }

    public getName(): string{
        return "Pix";
    }
}
