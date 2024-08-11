import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://66b3191c7fba54a5b7eb61dc.mockapi.io/Products');
    return response.data;
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.error = '';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.error = '';
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.products = [];
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
