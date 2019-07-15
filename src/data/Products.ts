export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}


const Products: Product[] = [
    {id: 0, name: 'Buku', price: 20000, description: 'A Book' },
    {id: 2, name: 'Pen', price: 5000, description: 'A Pen' },
    {id: 3, name: 'Table', price: 550000, description: 'A Table' },
    {id: 4, name: 'Chair', price: 100000, description: 'A Chair' },
];

export default Products;
