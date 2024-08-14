// redux 
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectProducts = (state: RootState) => state.product.products;
export const selectSearchTerm = (state: RootState) => state.product.searchTerm;
export const selectRating = (state: RootState) => state.product.rating;
export const selectRateSort = (state: RootState) => state.product.rateSort;
export const selectPriceSort = (state: RootState) => state.product.priceSort;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearchTerm, selectRating, selectRateSort, selectPriceSort],
  (products, searchTerm, rating, rateSort, priceSort) => {
    // Filter products based on search term and rating
    const filteredProducts = products.filter((product) => {
        const matchesSearchTerm = product.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesRating = rating ? product.rating === rating : true;
        return matchesSearchTerm && matchesRating;
    });
    // Sort products based on the selected sorting criteria
    const sortedProducts = filteredProducts.sort((a, b) => {
      if (rateSort) {
        if (rateSort === 'asc') {
          return a.rating - b.rating;
        } else {
          return b.rating - a.rating;
        }
      }
      if (priceSort) {
        if (priceSort === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      }
      return 0; // No sorting applied
    });
    return sortedProducts;
  }
);