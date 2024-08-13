import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/_utils/types/product';

interface ProductState {
  value: Product[];
}

const initialState: ProductState = {
  value: [
    {
      id: 26,
      title: "Product Beta 26",
      description: "High-quality Item 26",
      price: 158.91,
      currency: "USD",
      image: "https://via.placeholder.com/200?text=Product+26",
      rating: 3.5,
    }
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;