import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Tạo async thunk để fetch dữ liệu sản phẩm nam
export const fetchProductsnam = createAsyncThunk(
  'productsnam/fetchProductsnam',
  async () => {
    const response = await axios.get('https://dev32n.github.io/products-list-api/product.json');
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'productsnam',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsnam.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsnam.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsnam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
