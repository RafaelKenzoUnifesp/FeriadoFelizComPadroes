import { Cart } from "./entities/Cart";
import { Order } from "./entities/Order";
import { Products } from "./entities/Product";
import { NotificationFactory } from "./factory/NotificationFactory";
import { PaymentFactory } from "./factory/PaymentFactory";
import { ShippingFactory } from "./factory/ShippingFactory";    


function main(): void{
    const test = new Products(1,"Teste", 10.99);
    const test2 = new Products(2,"Teste2", 20.99);

    const cart = new Cart();
    cart.addItem(test, 1);
    cart.addItem(test2, 2);

    console.log(`Total do carrinho: R$ ${cart.getTotal().toFixed(2)}`);

    const order = new Order(1, cart.getItems(), cart.getTotal());
    console.log(`Order ID: ${order.getId()}`);
    console.log(`Status: ${order.getStatus()}`);

    const distanciaPedido = 80;
    const pesoPedido = 2.5;
    const shipping = ShippingFactory.createS("normal"); 
    const shippingCost = shipping.calculate(pesoPedido, distanciaPedido);
    console.log(`Tipo de frete: ${shipping.getName()} | Valor: R$ ${shippingCost.toFixed(2)}`);
    const deliveryDays = shipping.deliveryDays(distanciaPedido);
    console.log(`Prazo de entrega estimado: ${deliveryDays} dias úteis`);

    const valorFinal = order.getTotal() + shippingCost;
    console.log(`TOTAL A PAGAR (Produtos + Frete): R$ ${valorFinal.toFixed(2)}`);

    const payment = PaymentFactory.createP("pix");
    const paymentResult = payment.pay(valorFinal);
    console.log(`Forma de pagamento: ${payment.getName()} | Sucesso: ${paymentResult}`);


    const notification = NotificationFactory.createN("email");
    notification.send("cliente@email.com", `Seu pedido ${order.getId()} foi criado com sucesso.`);
} 
main();

