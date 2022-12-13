export interface PageView {
    id: number,
    name: string,
    route: string
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
    category: number,
}

export interface ProductItem {
    id: number,
    total: number
}

export interface Order {
    id: number,
    total: number,
    owner?: string,
    productList: ProductItem[],
    status: boolean,
    table?: number 
}

export interface Bill {
    id: number,
    order: Order
}