"use client"
// hooks 
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// libs
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { selectFilteredProducts } from '@/lib/features/selector';
import { setProduct } from '@/lib/features/productSlice';
// ui 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import CartModal from '@/components/cart-modal';
import CircularProgress from '@mui/material/CircularProgress';
// component
import ProductList from '@/components/product-list';

export default function Products() {
  // hooks
  const filteredProducts = useSelector((state: RootState) =>
    selectFilteredProducts(state)
  );
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart.carts);
  // states
  const [loading, setLoading] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);

  // initial fetch of products by 8 
  const fetchProducts = async (start = 0, end = 8) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/products?_start=${start}&_end=${end}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const { products } = await response.json();
        dispatch(setProduct(products));
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
    if (cart.length > 0) {
      setOpenCartModal(true);
    }
  };

  return (
    <>
      <div className="flex justify-end">
        <IconButton aria-label="add an cart" onClick={handleShowCartModal}>
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-[2.3rem] gap-y-5 gap-x-[1rem]">
        {loading ? (
          <CircularProgress size={70} />
        ) : (
          <>
            {filteredProducts.map((product) => (
              <ProductList key={product.id} product={product} />
            ))}
          </>
        )}
      </div>
      <CartModal open={openCartModal} setOpen={setOpenCartModal} />
    </>
  );
}