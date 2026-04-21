import { Observer } from "../interfaces/Observer";
import { Order } from "../entities/Order";
import { NotificationFactory } from "../factory/NotificationFactory";

export class EmailObserver implements Observer {
  constructor(private readonly customerEmail: string) {}

  public update(order: Order): void {
    const notification = NotificationFactory.createN("email");
    notification.send(
      this.customerEmail,
      `Atualização do pedido ${order.getId()}: novo status = ${order.getStatus()}`
    );
  }
}
