import { Order } from "../entities/Order";
import { NotificationFactory } from "../factory/NotificationFactory";
import { Observer } from "../interfaces/Observer";

export class SmsObserver implements Observer {
  constructor(private readonly phoneNumber: string) {}

  public update(order: Order): void {
    const notification = NotificationFactory.createN("sms");
    notification.send(
      this.phoneNumber,
      `Pedido ${order.getId()} atualizado para: ${order.getStatus()}`
    );
  }
}