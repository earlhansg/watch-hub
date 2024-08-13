"use client"

import Image from 'next/image';
import product from '@/assets/images/watch-1.png'
import { useEffect, useState } from 'react';
import { Product } from '@/app/_utils/types/product';
import ProductList from '@/components/product-list';


export default function Products() {
    const [products, setProducts] = useState<Product[]>([])
    const fetchProducts = async () => {
		try {
			const response = await fetch('http://localhost:3000/api/products', {
                method: 'GET',
            });
			if (response.ok) {
				const { products } = await response.json();
				setProducts(products);
			}
            // console.log('response', response)
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		fetchProducts();
	}, []);
    return (
      <>
        <div className="w-full grid grid-cols-4 mt-[3.8rem] gap-y-5 gap-x-[1rem]">
            {products.map((product) => (
                <ProductList key={product.id} product={product}/>
            ))}
          {/* <div className="bg-[#f3f2f0] flex flex-col hover:gap-2 gap-5 hover:py-5 py-10 group/item hover:drop-shadow-md h-[400px] hover:h-[auto]">
            <section className='flex justify-center'>
                <Image src={product} alt="Product Image" className='group-hover/item:w-[100px] w-[150px]'/>
            </section>
            <section className='flex flex-col text-center text=[#3e3f42]'>
              <h1 className='uppercase font-medium tracking-[3px]'>slate</h1>
              <p className='text-sm mt-1 font-medium'>$800</p>
            </section>
            <section className='hidden group-hover/item:flex flex-col justify-center gap-2 px-20 mt-2'>
                <button className='border-2 py-3'>Details</button>
                <button className='uppercase bg-[#3e3f42] py-3 text-white'>Add to Cart</button>
            </section>
          </div>
          <div className="bg-[#f3f2f0] flex flex-col hover:gap-2 gap-5 hover:py-5 py-10 group/item hover:drop-shadow-md h-[400px] hover:h-[auto]">
            <section className='flex justify-center'>
                <Image src={product} alt="Product Image" className='group-hover/item:w-[100px] w-[150px]'/>
            </section>
            <section className='flex flex-col text-center text=[#3e3f42]'>
              <h1 className='uppercase font-medium tracking-[3px]'>slate</h1>
              <p className='text-sm mt-1 font-medium'>$800</p>
            </section>
            <section className='hidden group-hover/item:flex flex-col justify-center gap-2 px-20 mt-2'>
                <button className='border-2 py-3'>Details</button>
                <button className='uppercase bg-[#3e3f42] py-3 text-white'>Add to Cart</button>
            </section>
          </div>
          <div className="bg-[#f3f2f0] flex flex-col hover:gap-2 gap-5 hover:py-5 py-10 group/item hover:drop-shadow-md h-[400px] hover:h-[auto]">
            <section className='flex justify-center'>
                <Image src={product} alt="Product Image" className='group-hover/item:w-[100px] w-[150px]'/>
            </section>
            <section className='flex flex-col text-center text=[#3e3f42]'>
              <h1 className='uppercase font-medium tracking-[3px]'>slate</h1>
              <p className='text-sm mt-1 font-medium'>$800</p>
            </section>
            <section className='hidden group-hover/item:flex flex-col justify-center gap-2 px-20 mt-2'>
                <button className='border-2 py-3'>Details</button>
                <button className='uppercase bg-[#3e3f42] py-3 text-white'>Add to Cart</button>
            </section>
          </div>
          <div className="bg-[#f3f2f0] flex flex-col hover:gap-2 gap-5 hover:py-5 py-10 group/item hover:drop-shadow-md h-[400px] hover:h-[auto]">
            <section className='flex justify-center'>
                <Image src={product} alt="Product Image" className='group-hover/item:w-[100px] w-[150px]'/>
            </section>
            <section className='flex flex-col text-center text=[#3e3f42]'>
              <h1 className='uppercase font-medium tracking-[3px]'>slate</h1>
              <p className='text-sm mt-1 font-medium'>$800</p>
            </section>
            <section className='hidden group-hover/item:flex flex-col justify-center gap-2 px-20 mt-2'>
                <button className='border-2 py-3'>Details</button>
                <button className='uppercase bg-[#3e3f42] py-3 text-white'>Add to Cart</button>
            </section>
          </div>
          <div className="bg-[#f3f2f0] flex flex-col hover:gap-2 gap-5 hover:py-5 py-10 group/item hover:drop-shadow-md h-[400px] hover:h-[auto]">
            <section className='flex justify-center'>
                <Image src={product} alt="Product Image" className='group-hover/item:w-[100px] w-[150px]'/>
            </section>
            <section className='flex flex-col text-center text=[#3e3f42]'>
              <h1 className='uppercase font-medium tracking-[3px]'>slate</h1>
              <p className='text-sm mt-1 font-medium'>$800</p>
            </section>
            <section className='hidden group-hover/item:flex flex-col justify-center gap-2 px-20 mt-2'>
                <button className='border-2 py-3'>Details</button>
                <button className='uppercase bg-[#3e3f42] py-3 text-white'>Add to Cart</button>
            </section>
          </div> */}
        </div>
      </>
    );
}