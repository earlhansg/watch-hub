"use client"

import Image from 'next/image';
import product from '@/assets/images/watch-1.png'
import { useEffect, useState } from 'react';
import { Product } from '@/app/_utils/types/product';
import ProductList from '@/components/product-list';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setProduct } from '@/lib/features/productSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from '@/lib/features/selector';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import CartModal from '@/components/cart-modal';



export default function Products() {
    const filteredProducts = useSelector((state: RootState) => selectFilteredProducts(state));
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state: RootState) => state.cart.carts);
    
    const [loading, setLoading] = useState(false);
    const [openCartModal, setOpenCartModal] = useState(false);

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

  const handleShowCartModal = () => {
    if(cart.length > 0 ) {
      setOpenCartModal(true)
    }
  }
    return (
      <>
        <div className='flex justify-end'>
          
          <IconButton aria-label="add an cart" onClick={handleShowCartModal}>
            <Badge badgeContent={cart.length} color="primary">
              <ShoppingCartIcon/>
            </Badge>
          </IconButton>
          
        </div>
        <div className="w-full grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-[2.3rem] gap-y-5 gap-x-[1rem]">
            {loading ? (
              <CircularProgress size={70}/>
            ) : (
              <>
                {filteredProducts.map((product) => (
                  <ProductList key={product.id} product={product}/>
                ))}
              </>
            )}
        </div>
        <CartModal open={openCartModal} setOpen={setOpenCartModal}/>
      </>
    );
}