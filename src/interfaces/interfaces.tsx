export interface product {
    title: string,
    category: string,
    price: number,
    image: string,
    slur: string,
    description: string,
    cartQuantity: number,
    rating: number,
}

export interface carting {
    productList: product[],
    totalAmount: 0,
    totalPrice: 0
}