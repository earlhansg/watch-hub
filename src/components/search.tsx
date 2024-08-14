"use client"

import { setSearchTerm } from "@/lib/features/productSlice";
import { useAppDispatch } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useState } from "react"
import { useSelector } from "react-redux";

const Search = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useSelector((state: RootState) => state.product.searchTerm);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search item"
        className="px-2 py-3 w-full border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search
