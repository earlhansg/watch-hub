import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/productSlice';
import cartSlice from './features/cartSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      product: productSlice,
      cart: cartSlice
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];