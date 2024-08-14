'use client'
import { addProduct } from '@/lib/features/productSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { selectFilteredProducts } from '@/lib/features/selector';

const LoadMore = () => {
  const filteredProducts = useSelector((state: RootState) => selectFilteredProducts(state));
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
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
    <div className="flex justify-center py-5">
      <button className="bg-[#f3f2f0] w-full py-4 flex gap-2 justify-center" onClick={() => fetchMoreProducts()}>
        <span className='uppercase tracking-[2px] '>More</span>
        {loading ? (
            <CircularProgress size={15} sx={{alignSelf: 'center'}}/> 
        ) : (
            <AddIcon sx={{ fontSize: "15px", alignSelf: 'center' }} />  
        )}
      </button>
    </div>
  );
};

export default LoadMore;
