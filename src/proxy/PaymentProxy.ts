import { Logger } from "../core/Logger";
import { Payment } from "../interfaces/Payment";


export class PaymentProxy implements Payment {
    private readonly logger: Logger;

    constructor(private readonly payment: Payment) {
        this.logger = Logger.getInstance();
    }

    public pay(total: number): boolean {
        this.logger.log(`Iniciando validação do pagamento com ${this.payment.getName()}`);
        
        if (total <= 0) {
            this.logger.log("Pagamento recusado.");
            return false;
        }

        const success = this.payment.pay(total);
        
        if(success) {
            this.logger.log(`Pagamento aprovado com ${this.payment.getName()}`);
        } else {
            this.logger.log(`Pagamento recusado com ${this.payment.getName()}`);
        }
        return success;
    }

    public getName(): string {
        return `Proxy(${this.payment.getName()})`;
    }
}
