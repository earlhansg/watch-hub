"use client"

import Image from 'next/image';
import product from '@/assets/images/watch-1.png'
import { useEffect, useState } from 'react';
import { Product } from '@/app/_utils/types/product';
import ProductList from '@/components/product-list';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setProduct } from '@/lib/features/productSlice';
import CircularProgress from '@mui/material/CircularProgress';



export default function Products() {
    const products = useAppSelector((state) => state.product.value);
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    
    const fetchProducts = async (start = 0, end = 8) => {
      setLoading(true);
      try {
          const response = await fetch(`http://localhost:3000/api/products?_start=${start}&_end=${end}`, {
              method: "GET",
          });
          if (response.ok) {
              const { products } = await response.json();
              // setProducts(products);
              dispatch(setProduct(products))
              setLoading(false);
          }
      } catch (error) {
          console.error(error);
      }
  };
  
	useEffect(() => {
		fetchProducts();
	}, []);

    return (
      <>
        {/* <div className="w-full grid grid-cols-4 mt-[3.8rem] gap-y-5 gap-x-[1rem]"> */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-[3.8rem] gap-y-5 gap-x-[1rem]">
            {loading ? (
              <CircularProgress size={70}/>
            ) : (
              <>
                {products.map((product) => (
                  <ProductList key={product.id} product={product}/>
                ))}
              </>
            )}
        </div>
      </>
    );
}