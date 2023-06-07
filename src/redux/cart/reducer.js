import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => { //{type: 'setItemInCart', payload: {}}
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter((game) => game.id !== action.payload);
        }
    }
});

export const {setItemInCart, deleteItemFromCart} = cartSlice.actions;

export default cartSlice.reducer;