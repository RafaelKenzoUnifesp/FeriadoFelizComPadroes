export interface Payment{
    pay(amount: number): boolean;
    getName(): string;
}
