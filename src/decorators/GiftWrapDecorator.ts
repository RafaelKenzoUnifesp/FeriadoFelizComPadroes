import { OrderDecorator } from "./OrderDecorator";

export class GiftWrapDecorator extends OrderDecorator {
  public getDescription(): string {
    return `${this.orderComponent.getDescription()} + Embalagem para presente`;
  }

  public getCost(): number {
    return this.orderComponent.getCost() + 15;
  }
}