export interface PageView {
    id: number,
    name: string
}

export interface ProductCategory{
    id: number,
    name: string
}

export interface Product {
    id: number,
    name: string,
    price: number,
    image: string,
    category: ProductCategory,
}

export interface Order {
    id: number,
    total: number,
    owner?: string,
    productList: Product[],
    status: boolean,
    table?: number 
}

export interface Bill {
    id: number,
    order: Order
}