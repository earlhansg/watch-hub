import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectProducts = (state: RootState) => state.product.products;
export const selectSearchTerm = (state: RootState) => state.product.searchTerm;
export const selectRating = (state: RootState) => state.product.rating;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearchTerm, selectRating],
  (products, searchTerm, rating) => {
    return products.filter(product => {
      const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRating = rating ? product.rating === rating : true;
      return matchesSearchTerm && matchesRating;
    });
  }
);