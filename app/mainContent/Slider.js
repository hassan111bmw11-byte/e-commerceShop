"use client";
import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export default function CustomMarks() {
  const { filterByPrice } = useContext(ProductContext);

  const [priceRange, setPriceRange] = useState([0, 600]);

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  useEffect(() => {
    filterByPrice(priceRange[0], priceRange[1]);
  }, [priceRange, filterByPrice]);

  return (
    <div className="px-4 mt-4 ">
      <p className="mb-2 font-semibold text-zinc-800">
        Price Range: ${priceRange[0]} - ${priceRange[1]}
      </p>
      <Slider
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={600}
        step={5}
      />
    </div>
  );
}
