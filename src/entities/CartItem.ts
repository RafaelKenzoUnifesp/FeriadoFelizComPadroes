import { Product } from "./Product";

export class CartItem {
    constructor(
        private readonly product: Product,
        private quantity: number,
    ){
        if(quantity <= 0){
            throw new Error("Quantidade deve ser maior que zero");
        }
    }
    public getProduct(): Product {
        return this.product;
    }
    public getQuantity(): number {
        return this.quantity;
    }
    public increaseQuantity(amount: number): void{
        if(amount <= 0){
            throw new Error("Quantidade a ser aumentada deve ser maior que zero");
        }
        this.quantity += amount;
    }
    public getSubTotal(): number {
        return this.product.getPrice() * this.quantity;
    }
}
   

    