'use client'

// hook
import { useState } from 'react';
// libs
import { addProduct } from '@/lib/features/productSlice';
import { useAppDispatch } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { selectFilteredProducts } from '@/lib/features/selector';
// mui
import AddIcon from '@mui/icons-material/Add';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

const LoadMore = () => {
  // hooks 
  const filteredProducts = useSelector((state: RootState) => selectFilteredProducts(state));
  const searchTerm = useSelector((state: RootState) => state.product.searchTerm);
  const rating = useSelector((state: RootState) => state.product.rating);
  const dispatch = useAppDispatch();
  // state 
  const [loading, setLoading] = useState(false);

  // this api was design to add data in products state when More is click 
  const fetchMoreProducts = async () => {
    setLoading(true)
    const start = filteredProducts.length;
    const end = filteredProducts.length + 8;
    // Adding a 2-second delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    try {
        const response = await fetch(`http://localhost:3000/api/products?_start=${start}&_end=${end}`, {
            method: "GET",
        });
        if (response.ok) {
            const { products } = await response.json();
            // setProducts(products);
            dispatch(addProduct(products))
            setLoading(false)
        }
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <>
      {(searchTerm === '' && !rating) && (
        <div className="flex justify-center py-5 md:mb-0 mb-2">
          <button
            className="bg-[#f3f2f0] w-full py-4 flex gap-2 justify-center"
            onClick={() => fetchMoreProducts()}
          >
            <span className="uppercase tracking-[2px] ">More</span>
            {loading ? (
              <CircularProgress size={15} sx={{ alignSelf: "center" }} />
            ) : (
              <AddIcon sx={{ fontSize: "15px", alignSelf: "center" }} />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default LoadMore;
