import { configureStore } from '@reduxjs/toolkit';
import productsnamReducer from './productsnamSlice'; 
import productsnuReducer from './productsnuSlice'; 

const store = configureStore({
  reducer: {
    productsnam: productsnamReducer,
    productsnu: productsnuReducer,

  },
});

export default store;
