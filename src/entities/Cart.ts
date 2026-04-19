import { Products } from "./Product";
import { CartItem } from "./CartItem";

export class Cart {
    private readonly items: CartItem[] = [];
    public addItem(product: Products, quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Quantidade deve ser maior que zero");
        }
        const existingItem = this.items.find(
            (item) => item.getProduct().getId() === product.getId()
        );
        if (existingItem) {
            existingItem.increaseQuantity(quantity);
            return;
        }

        this.items.push(new CartItem(product,quantity));
    }
    public removeItem(productId: number): void{
        const index = this.items.findIndex(
            (item) => item.getProduct().getId() === productId
        );
        if(index !== -1){
            this.items.splice(index,1);
        }
    }

    public clear(): void {
        this.items.length = 0;
    }
    public isEmpty(): boolean {
        return this.items.length === 0;
    }
    public getItems(): CartItem[] {
        return [...this.items];
    }
    public getTotal(): number {
        return this.items.reduce((total, item) => total + item.getSubTotal(), 0);
  }

}