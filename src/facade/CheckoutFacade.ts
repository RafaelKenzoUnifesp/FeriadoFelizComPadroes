import { AppConfig } from "../core/AppConfig";
import { Logger } from "../core/Logger";
import { Order } from "../entities/Order";
import { PaymentFactory } from "../factory/PaymentFactory";
import { ShippingFactory } from "../factory/ShippingFactory";   
import { PaymentProxy } from "../proxy/PaymentProxy";
import { OrderComponent } from "../interfaces/OrderComponent";


export class CheckoutFacade {
    private readonly appConfig: AppConfig;
    private readonly logger: Logger;

    constructor(){
        this.appConfig = AppConfig.getInstance();
        this.logger = Logger.getInstance();
    }   
    public finalizarcompra(order: Order,orderComponent: OrderComponent, paymentType: string,shippingType: string,peso: number, distancia: number,costumerEmail: string): void {
        this.logger.log(`Iniciando checkout para o pedido ${order.getId()}`);
        
        const shipping = ShippingFactory.createS(shippingType);
        const shippingCost = shipping.calculate(peso, distancia);
        const deliveryDays = shipping.deliveryDays(distancia);
        this.logger.log(`Frete calculado: ${shipping.getName()} | Custo: ${this.appConfig.getMoeda()} ${shippingCost.toFixed(2)} | Prazo: ${deliveryDays} dias úteis`);

        const extras = orderComponent.getCost();
        this.logger.log(`Valor do pedido com adicionais: R$ ${extras.toFixed(2)}`);

        const valorFinal = extras + shippingCost;
        this.logger.log(`Valor total a pagar (Produtos + Frete): ${this.appConfig.getMoeda()} ${valorFinal.toFixed(2)}`);

        const payment = PaymentFactory.createP(paymentType);
        const paymentProxy = new PaymentProxy(payment);
        const paymentResult = paymentProxy.pay(valorFinal);
        if (!paymentResult) {
            this.logger.log(`Falha no pagamento do pedido ${order.getId()}`);
            return;
        }
        
        order.updateStatus("pago");
        this.logger.log(`Pagamento processado com sucesso para o pedido ${order.getId()}`);
        this.logger.log(`Checkout finalizado para ${order.getId()} na loja ${this.appConfig.getLojaname()}`);
    }
}
