import { AppConfig } from "../core/AppConfig";
import { Logger } from "../core/Logger";
import { Order } from "../entities/Order";
import { NotificationFactory } from "../factory/NotificationFactory";
import { PaymentFactory } from "../factory/PaymentFactory";
import { ShippingFactory } from "../factory/ShippingFactory";   

export class CheckoutFacade {
    private readonly appConfig: AppConfig;
    private readonly logger: Logger;

    constructor(){
        this.appConfig = AppConfig.getInstance();
        this.logger = Logger.getInstance();
    }   
    public finalizarcompra(order: Order, distancia: number, peso: number, paymentMethod: string, notificationMethod: string): void {
        this.logger.log(`Iniciando checkout para o pedido ${order.getId()}`);
        
        const shipping = ShippingFactory.createS("normal");
        const shippingCost = shipping.calculate(peso, distancia);
        const deliveryDays = shipping.deliveryDays(distancia);
        this.logger.log(`Frete calculado: ${shipping.getName()} | Custo: ${this.appConfig.getMoeda()} ${shippingCost.toFixed(2)} | Prazo: ${deliveryDays} dias úteis`);

        const valorFinal = order.getTotal() + shippingCost;
        this.logger.log(`Valor total a pagar (Produtos + Frete): ${this.appConfig.getMoeda()} ${valorFinal.toFixed(2)}`);

        const payment = PaymentFactory.createP(paymentMethod);
        const paymentResult = payment.pay(valorFinal);
        order.updateStatus("pago");
        this.logger.log(`Pagamento processado com sucesso para o pedido ${order.getId()}`);

        const notification = NotificationFactory.createN("email");
        const customerEmail = "client@email.com";
        notification.send(customerEmail, `Seu pedido ${order.getId()} foi confirmado! Valor: ${this.appConfig.getMoeda()} ${valorFinal.toFixed(2)}. Frete: ${shipping.getName()} - Prazo: ${deliveryDays} dias úteis.`);
        this.logger.log(`Notificação enviada para o cliente sobre o pedido ${order.getId()}`);
    }
}
