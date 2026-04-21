import { OrderComponent } from "../interfaces/OrderComponent";

export abstract class OrderDecorator implements OrderComponent {
  constructor(protected readonly orderComponent: OrderComponent) {}

  public getDescription(): string {
    return this.orderComponent.getDescription();
  }

  public getCost(): number {
    return this.orderComponent.getCost();
  }
}