import test from "node:test";
import assert from "node:assert/strict";

import { Cart } from "../src/entities/Cart";
import { Order } from "../src/entities/Order";
import { Product } from "../src/entities/Product";
import { GiftWrapDecorator } from "../src/decorators/GiftWrapDecorator";
import { SeguroDecorator } from "../src/decorators/SeguroDecorator";
import { PaymentFactory } from "../src/factory/PaymentFactory";
import { ShippingFactory } from "../src/factory/ShippingFactory";

test("Cart deve calcular o total corretamente", () => {
    const product1 = new Product(1, "Produto A", 10);
    const product2 = new Product(2, "Produto B", 20);

    const cart = new Cart();
    cart.addItem(product1, 2);
    cart.addItem(product2, 1);

    assert.equal(cart.getTotal(), 40);
});

test("Order deve iniciar com status criado", () => {
    const product = new Product(1, "Produto A", 10);

    const cart = new Cart();
    cart.addItem(product, 1);

    const order = new Order(1, cart.getItems(), cart.getTotal());

    assert.equal(order.getStatus(), "criado");
});

test("Decorator deve adicionar custo ao pedido", () => {
    const product = new Product(1, "Produto A", 100);

    const cart = new Cart();
    cart.addItem(product, 1);

    const order = new Order(1, cart.getItems(), cart.getTotal());

    const comPresente = new GiftWrapDecorator(order);
    const comSeguro = new SeguroDecorator(comPresente);

    assert.equal(comSeguro.getCost(), order.getCost() + 15 + 20);
});

test("PaymentFactory deve criar pagamento pix", () => {
    const payment = PaymentFactory.createP("pix");

    assert.equal(payment.getName().toLowerCase(), "pix");
});

test("ShippingFactory deve criar frete express", () => {
    const shipping = ShippingFactory.createS("express");

    assert.equal(shipping.getName().toLowerCase().includes("express"), true);
});

test("Order deve notificar e mudar para pago", () => {
    const product = new Product(1, "Produto A", 50);

    const cart = new Cart();
    cart.addItem(product, 1);

    const order = new Order(1, cart.getItems(), cart.getTotal());

    order.updateStatus("pago");

    assert.equal(order.getStatus(), "pago");
});