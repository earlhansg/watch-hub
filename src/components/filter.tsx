"use client";

import { setRating, setSortPrice, setSortRate } from "@/lib/features/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Filter = () => {
  const dispatch = useAppDispatch();
  const rateSort = useAppSelector((state: RootState) => state.product.rateSort);
  const priceSort = useAppSelector((state: RootState) => state.product.priceSort);

  const [rateValue, setRateValue] = useState<number | null>(null);
  const [priceRangevalue, setPriceRangeValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log('newValue', newValue)
    setPriceRangeValue(newValue as number[]);
  };

  const handleRateChange = (newValue: number | null) => {
    dispatch(setRating(newValue));
    setRateValue(newValue);
  }

  const handleSortRate = () => {
    if(rateSort === 'asc') {
      dispatch(setSortRate('desc'));
    } else {
      dispatch(setSortRate('asc'));
    }
  }

  const handleSortPrice = () => {
    if(priceSort === 'asc') {
      dispatch(setSortPrice('desc'));
    } else {
      dispatch(setSortPrice('asc'));
    }
  }

  useEffect(() => {
    console.log('priceSort', priceSort)
  }, [priceSort])

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
            <span className="flex cursor-pointer" onClick={handleSortRate}>
              <h5 className="font-light">Rating</h5>
              {rateSort === 'asc' ? (
                <ArrowDropUpIcon/>
              ) : (
                <ArrowDropDownIcon/>
              )}
            </span>
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
            <span className="flex cursor-pointer" onClick={handleSortPrice}>
              <h5 className="font-light">Price Range</h5>
              {priceSort === 'asc' ? (
                <ArrowDropUpIcon/>
              ) : (
                <ArrowDropDownIcon/>
              )}
            </span>
          </div>
        </ul>
      </section>
    </div>
  );
};

export default Filter;
