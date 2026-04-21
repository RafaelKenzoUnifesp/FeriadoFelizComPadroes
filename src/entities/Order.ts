import {CartItem} from "./CartItem";
import { Observer } from "../interfaces/Observer";
import { Subject } from "../interfaces/Subject";
import { OrderComponent } from "../interfaces/OrderComponent";


export type OrderStatus = "criado" | "pago" | "enviado" | "entregue" | "cancelado";

export class Order implements Subject, OrderComponent {
    private status: OrderStatus;
    private readonly observers: Observer[] = [];

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
        this.notifyObserver();
    }
    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }
    public removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if(index !== -1){
            this.observers.splice(index, 1);
        }
    }
    public notifyObserver(): void {
        for(const observer of this.observers){
            observer.update(this);
        }
    }
    public getDescription(): string {
        return `Pedido ${this.id}`;
    }
    public getCost(): number {
        return this.total;
    }
}
