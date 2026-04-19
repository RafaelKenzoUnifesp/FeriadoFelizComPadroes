import {CartItem} from "./CartItem";

export type OrderStatus = "criado" | "pago" | "enviado" | "entregue" | "cancelado";

export class Order {
    private status: OrderStatus;

    constructor(
        private readonly id: number,
        private readonly items: CartItem[],
        private readonly total: number,
    ){
        if(id <= 0){
            throw new Error("Id errado");
        }
        if (items.length === 0) {
            throw new Error("Order must contain at least one item.");
        }
        if(total < 0){
            throw new Error("Total nao pode ser negativo");
        }
        this.status = "criado";
    }
    public getId(): number {
        return this.id;
    }
    public getItems(): CartItem[] {
        return [...this.items];
    }
    public getTotal(): number {
        return this.total;
    }
    public getStatus(): OrderStatus {
        return this.status;
    }
    public updateStatus(newStatus: OrderStatus): void {
        this.status = newStatus;
    }
}
