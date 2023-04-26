import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { product, carting } from '../interfaces/interfaces'

const initialState: carting = {
    productList: [],
    totalAmount: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action: PayloadAction<{props:product, amount:number}>) {
            const itemIndex = state.productList.findIndex((item) => item.title === action.payload.props.title);
            if(itemIndex >= 0) {
                state.productList[itemIndex].cartQuantity += action.payload.amount;
            } else {
                const tempProduct = {...action.payload.props, cartQuantity: action.payload.amount}
                state.productList.push(tempProduct);
            }
            state.totalAmount += action.payload.amount;
                state.totalPrice += action.payload.amount * action.payload.props.price;
        },
        removeFromCart(state, action: PayloadAction<product>) {
            const itemIndex = state.productList.findIndex((item) => item.title === action.payload.title);
            if(itemIndex > -1) {
                state.totalPrice -= state.productList[itemIndex].price * state.productList[itemIndex].cartQuantity;
                state.totalAmount -= state.productList[itemIndex].cartQuantity;
                state.productList.splice(itemIndex, 1);
            }
        },
        plusItemToCart(state, action: PayloadAction<product>) {
            const itemIndex = state.productList.findIndex((item) => item.title === action.payload.title);
            state.productList[itemIndex].cartQuantity++;
            state.totalAmount++;
            state.totalPrice += state.productList[itemIndex].price;
        },
        minusItemToCart(state, action: PayloadAction<product>) {
            const itemIndex = state.productList.findIndex((item) => item.title === action.payload.title);
            state.productList[itemIndex].cartQuantity--;
            state.totalAmount--;
            state.totalPrice -= state.productList[itemIndex].price;
        }
    }
})

export const {addToCart, removeFromCart, plusItemToCart, minusItemToCart} = cartSlice.actions;

export default cartSlice.reducer;