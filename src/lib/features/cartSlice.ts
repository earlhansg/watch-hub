import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/_utils/types/product';

type CartItem = Product & {
  quantity: number;
};

type CartState = {
  carts: CartItem[];
  total: number;
};

const initialState: CartState = {
  carts: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.carts.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.carts.push({ ...action.payload, quantity: 1 });
      }

      // Update the total price
      state.total = state.carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    removeCart: (state, action: PayloadAction<string>) => {
      state.carts = state.carts.filter(item => item.id !== action.payload);

      // Update the total price
      state.total = state.carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const existingItem = state.carts.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity = action.payload.quantity;

        // Remove the item if the quantity is set to 0
        if (existingItem.quantity === 0) {
          state.carts = state.carts.filter(item => item.id !== action.payload.id);
        }
      }

      // Update the total price
      state.total = state.carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
        const existingItem = state.carts.find(item => item.id === action.payload);
  
        if (existingItem) {
          existingItem.quantity += 1;
        }
  
        // Update the total price
        state.total = state.carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
        const existingItem = state.carts.find(item => item.id === action.payload);
  
        if (existingItem && existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else if (existingItem && existingItem.quantity === 1) {
          state.carts = state.carts.filter(item => item.id !== action.payload);
        }
  
        // Update the total price
        state.total = state.carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  

    clearCart: (state) => {
      state.carts = [];
      state.total = 0;
    },
  },
});

export const { addCart, removeCart, updateQuantity, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;