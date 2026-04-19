export interface Shipping {
    calculate(peso: number, distance: number): number;
    getName(): string;
    deliveryDays(distance: number): number;
}
