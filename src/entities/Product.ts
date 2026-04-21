export class Product {
    constructor(
        private readonly id: number,
        private readonly name: string,
        private readonly price: number,
    ){
        if(id <= 0){
            throw new Error("Id errado");
        }
        if(!name.trim()){
            throw new Error("Nome necessario");
        }
        if(price < 0){
            throw new Error("Preço nao pode ser negativo");
        }
    }
    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getPrice(): number {
        return this.price;
    }
}


