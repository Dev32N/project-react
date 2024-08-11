import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(localStorage.getItem('cartItems')) || [],
    },
    reducers: {
        addItem(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity = quantity;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        clearCart(state) {
            state.items = [];
            localStorage.removeItem('cartItems');
        },
    },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
