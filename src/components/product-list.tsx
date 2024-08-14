"use client";

import { Product } from "@/app/_utils/types/product";
import Image from "next/image";
import productImg from "@/assets/images/watch-1.png";
import { useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

type ProductListProp = {
  product: Product;
};

const ProductList = ({ product }: ProductListProp) => {

  return (
    <>
      <div className="bg-[#f3f2f0] flex flex-col hover:gap-2 gap-5 hover:py-5 py-10 group/item hover:drop-shadow-md h-[400px] hover:h-[auto]">
        <section className="flex justify-center">
          <Image
            src={productImg}
            alt="Product Image"
            // className="group-hover/item:w-[100px] w-[150px]"
            className="group-hover/item:w-[100px] xl:w-[150px] w-[120px]"
          />
        </section>
        <section className="flex flex-col text-center text=[#3e3f42]">
          {/* <h1 className="uppercase font-medium tracking-[3px] text-[#3e3f42]">{product.title}</h1> */}
          <h1 className="uppercase font-medium xl:tracking-[3px] tracking-[1px] text-[#3e3f42]">{product.title}</h1>
          <p className="text-sm mt-1 font-medium text-[#7f7f80]">${product.price}</p>
        </section>
        <section className="hidden group-hover/item:flex flex-col justify-center gap-2 px-20 mt-2">
          <button className="border-2 py-3">Details</button>
          <button className="uppercase bg-[#3e3f42] py-3 text-white">
            Add to Cart
          </button>
        </section>
      </div>
    </>
  );
};

export default ProductList;
