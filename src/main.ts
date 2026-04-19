import { Cart } from "./entities/Cart";
import { Order } from "./entities/Order";
import { Products } from "./entities/Product";

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
} 
main();

