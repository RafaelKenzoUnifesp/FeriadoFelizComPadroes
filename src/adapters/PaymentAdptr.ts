import { PaymentGat } from "./PaymentGat";
import { Payment } from "../interfaces/Payment";

export class PaymentAdptr implements Payment {
    constructor(private readonly paymentGat: PaymentGat) {}
    public pay(total: number): boolean {
        const result = this.paymentGat.pay(total);
        return result === "Pagamento realizado com sucesso.";
    }
    public getName(): string {
        return "Gateway de Pagamento adaptado";
    }
}

