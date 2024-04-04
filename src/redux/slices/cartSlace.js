import { createSlice } from "@reduxjs/toolkit";
import { myInitialData } from "../initialData";


const cartSlice = createSlice({
    name: 'cart',
    initialState: myInitialData.cart,
    reducers: {
        addToCart(state, action) {
            const product = state.find(e=>e.id === action.payload);
            if (product) {
                product.count++;
                return;
            }
            state.push({id: action.payload, count: 1, isSelected: false});        
        }
    }
})
export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;