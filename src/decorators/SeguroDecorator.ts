import { OrderDecorator } from "./OrderDecorator";

export class SeguroDecorator extends OrderDecorator {
  public getDescription(): string {
    return `${this.orderComponent.getDescription()} + Seguro do pedido`;
  }

  public getCost(): number {
    return this.orderComponent.getCost() + 20;
  }
}