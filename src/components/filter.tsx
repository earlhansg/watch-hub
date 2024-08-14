"use client";

import { setRating } from "@/lib/features/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import { useState } from "react";

const Filter = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state: RootState) => state.product.searchTerm);

  const [rateValue, setRateValue] = useState<number | null>(3);
  const [priceRangevalue, setPriceRangeValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log('newValue', newValue)
    setPriceRangeValue(newValue as number[]);
  };

  const handleRateChange = (newValue: number | null) => {
    dispatch(setRating(newValue));
    setRateValue(newValue);
  }
  return (
    <div className="bg-[#3e3f42] flex flex-col gap-20 text-white py-10 px-5">
      <section className="flex flex-col gap-10">
        <h1 className="uppercase font-medium">categories</h1>
        <ul className="flex flex-col gap-3">
          <li className="font-light cursor-pointer">Gold</li>
          <li className="font-light cursor-pointer">Sport</li>
          <li className="font-light cursor-pointer">Italian</li>
          <li className="font-light cursor-pointer">Universal</li>
        </ul>
      </section>
      <section className="flex flex-col gap-10">
        <h1 className="uppercase font-medium">filter by</h1>
        <ul className="flex flex-col gap-3">
          <li className="flex flex-col gap-3">
            <h5 className="font-light">Rating</h5>
            <div className="flex gap-2">
              <Rating
                name="simple-controlled"
                value={rateValue}
                // onChange={(event, newValue) => {
                //   setRateValue(newValue);
                // }}
                onChange={(event, newValue) => handleRateChange(newValue)}
              />
            </div>
          </li>
          <div className="flex flex-col gap-10">
            <h5 className="font-light">Price Range</h5>
            <Slider
              getAriaLabel={() => "Price range"}
              value={priceRangevalue}
              onChange={handleChange}
              valueLabelDisplay="on"
            />
          </div>
        </ul>
      </section>
    </div>
  );
};

export default Filter;
