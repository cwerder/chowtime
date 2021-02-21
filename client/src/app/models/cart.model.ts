// TODO: make FoodItem model as well as CartItem model

export interface CartItem {
    readonly name: string,
    readonly description: string,
    readonly price: number,
    quantity: number
}