import { Order } from "../entities/Order";

export interface Observer {
    update(order: Order): void;
}

