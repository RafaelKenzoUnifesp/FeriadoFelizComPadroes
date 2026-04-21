import { Logger } from "../core/Logger";
import { Order } from "../entities/Order";
import { Observer } from "../interfaces/Observer";

export class AdminObserver implements Observer {
  private readonly logger: Logger;

  constructor() {
    this.logger = Logger.getInstance();
  }

  public update(order: Order): void {
    this.logger.log(
      `[ADMIN] Pedido ${order.getId()} alterado para o status ${order.getStatus()}`
    );
  }
}