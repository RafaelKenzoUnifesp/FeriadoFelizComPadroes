import { Cart } from "./entities/Cart";
import { Order } from "./entities/Order";
import { Product } from "./entities/Product";
import { CheckoutFacade } from "./facade/CheckoutFacade"; 
import { AdminObserver } from "./observers/AdminObserver";
import { EmailObserver } from "./observers/EmailObserver";
import { SmsObserver } from "./observers/SmsObserver";
import { GiftWrapDecorator } from "./decorators/GiftWrapDecorator";
import { SeguroDecorator } from "./decorators/SeguroDecorator";
import { OrderComponent } from "./interfaces/OrderComponent";


function main(): void{
    const test = new Product(1,"Teste", 10.99);
    const test2 = new Product(2,"Teste2", 20.99);

    const cart = new Cart();
    cart.addItem(test, 1);
    cart.addItem(test2, 2);

    const order = new Order(1, cart.getItems(), cart.getTotal());

    order.addObserver(new EmailObserver("client@email.com"));
    order.addObserver(new SmsObserver("11999999999"));
    order.addObserver(new AdminObserver());

    let decoratedOrder: OrderComponent = order;
    decoratedOrder = new GiftWrapDecorator(decoratedOrder);
    decoratedOrder = new SeguroDecorator(decoratedOrder);

    console.log(`Pedido criado: ${order.getId()}`);
    console.log(`Status inicial: ${order.getStatus()}`);
    console.log(`Descrição final: ${decoratedOrder.getDescription()}`);
    console.log(`Total com adicionais: R$ ${decoratedOrder.getCost().toFixed(2)}`);

    const checkout = new CheckoutFacade();

    checkout.finalizarcompra(order, decoratedOrder, "external", "express",3, 180,"client@email.com");

    console.log(`Status final do pedido: ${order.getStatus()}`);
} 
main();

