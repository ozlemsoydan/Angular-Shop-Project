export class Product {
    id: number;
    name: string;
    price: number;
    categoryId: number;
    description: string;
    imageUrl: string;

    constructor(){
        this.id = 0;
        this.name = ""
        this.price = 0;
    }
}