export type Racting = {
    rate: number;
    count: number;
}
export type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Racting;
    title: string;
}
