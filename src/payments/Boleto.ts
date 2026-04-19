import { Payment } from "../interfaces/Payment";

export class Boleto implements Payment {
    public pay(amount: number): boolean {
        if(amount <= 0){
            return false;
    }
    console.log(`Pagamento por boleto realizado no valor ${amount.toFixed(2)}`);
    return true;
    }

    public getName(): string{
        return "Boleto";
    }
}
