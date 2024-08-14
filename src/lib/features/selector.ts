import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectProducts = (state: RootState) => state.product.products;
export const selectSearchTerm = (state: RootState) => state.product.searchTerm;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearchTerm],
  (products, searchTerm) => {
    return products.filter(product => {
      const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearchTerm;
    });
  }
);