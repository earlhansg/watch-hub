import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/_utils/types/product';

interface ProductState {
  value: Product[];
}

const initialState: ProductState = {
  value: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product[]>) => {
      state.value = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product[]>) => {
      state.value = [...state.value, ...action.payload];
    },
    resetProduct: (state) => {
      state.value = [];
    }
  },
});

export const { setProduct, addProduct, resetProduct } = productSlice.actions;

export default productSlice.reducer;