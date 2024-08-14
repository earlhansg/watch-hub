import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/_utils/types/product';

type ProductState = {
  products: Product[];
  searchTerm: string;
  rating: number | null;
  rateSort: 'asc' | 'desc';
  priceSort: 'asc' | 'desc';
}

const initialState: ProductState = {
  products: [],
  searchTerm: '',
  rating: null,
  rateSort: 'desc',
  priceSort: 'desc'
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
    setRating(state, action: PayloadAction<number | null>) {
      state.rating = action.payload;
    },
    setSortRate(state, action: PayloadAction<'asc' | 'desc'>) {
      state.rateSort = action.payload;
    },
    setSortPrice(state, action: PayloadAction<'asc' | 'desc'>) {
      state.priceSort = action.payload;
    }
  },
});

export const { setProduct, addProduct, resetProduct, setSearchTerm, setRating, setSortRate, setSortPrice } = productSlice.actions;

export default productSlice.reducer;