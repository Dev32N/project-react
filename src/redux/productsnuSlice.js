import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Tạo async thunk để fetch dữ liệu sản phẩm nữ
export const fetchProductsnu = createAsyncThunk(
  'productsnu/fetchProductsnu',
  async () => {
    const response = await axios.get('https://66b3191c7fba54a5b7eb61dc.mockapi.io/Products');
    return response.data;
  }
);

const productsnuSlice = createSlice({
  name: 'productsnu',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsnu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsnu.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsnu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsnuSlice.reducer;
