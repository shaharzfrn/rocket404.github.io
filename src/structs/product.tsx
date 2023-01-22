export interface Product {
    id: String;
    name: String;
    category: String;

    description: String;
    price: number;
    stock: number;
    image?: String;
}

export const EMPTY_PRODUCT: Product = {
    id: "",
    name: "",
    category: "",
    description: "",
    price: -1,
    stock: -1,
}