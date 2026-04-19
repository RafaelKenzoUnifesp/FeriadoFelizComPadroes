export interface Payment{
    pay(amount: number): void;
    getName(): string;
}
