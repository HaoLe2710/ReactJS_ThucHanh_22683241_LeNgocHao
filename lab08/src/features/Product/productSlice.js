// src/features/Product/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [
      { id: 1, name: 'Sản phẩm A', price: 100 },
      { id: 2, name: 'Sản phẩm B', price: 150 },
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
