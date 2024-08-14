import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/_utils/types/product';

type ProductState = {
  products: Product[];
  searchTerm: string;
}

const initialState: ProductState = {
  products: [],
  searchTerm: ''
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product[]>) => {
      state.products = [...state.products, ...action.payload];
    },
    resetProduct: (state) => {
      state.products = [];
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setProduct, addProduct, resetProduct, setSearchTerm } = productSlice.actions;

export default productSlice.reducer;