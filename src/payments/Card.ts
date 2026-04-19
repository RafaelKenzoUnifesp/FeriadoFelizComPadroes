import { Payment } from "../interfaces/Payment";

export class Card implements Payment {
    public pay(amount: number): boolean {
        if(amount <= 0){
            return false;
    }
    console.log(`Pagamento por cartão realizado no valor ${amount.toFixed(2)}`);
    return true;
    }

    public getName(): string{
        return "Cartão";
    }
}
