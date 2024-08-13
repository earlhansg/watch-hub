"use client";

import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import { useState } from "react";

function valuetext(value: number) {
  return `${value}°C`;
}

const Filter = () => {
  const [rateValue, setRateValue] = useState<number | null>(3);
  const [priceRangevalue, setPriceRangeValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPriceRangeValue(newValue as number[]);
  };
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
                onChange={(event, newValue) => {
                  setRateValue(newValue);
                }}
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
              // getAriaValueText={valuetext}
            />
          </div>
        </ul>
      </section>
    </div>
  );
};

export default Filter;
