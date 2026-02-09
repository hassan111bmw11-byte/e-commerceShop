"use client";

import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BookIcon from "@mui/icons-material/Book";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";

export default function SideMenu() {
  const { filterByCategory, activeCategory } = useContext(ProductContext);

  const categories = [
    { name: "all", label: "All", icon: <DensitySmallIcon /> },
    {
      name: "electronics",
      label: "Electronics",
      icon: <LaptopMacOutlinedIcon />,
    },
    { name: "clothing", label: "Clothing", icon: <AccountBoxIcon /> },
    { name: "books", label: "Books", icon: <BookIcon /> },
  ];

  return (
    <div className="bg-zinc-300 w-60 h-screen p-4 flex flex-col gap-2">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => filterByCategory(cat.name)}
          className={`ml-4 pl-4 w-48 h-10 flex items-center rounded-2xl text-black 
            ${activeCategory === cat.name ? "bg-blue-700 text-white" : "hover:bg-blue-500"}`}
        >
          {cat.icon}
          <p className="ml-4">{cat.label}</p>
        </button>
      ))}
    </div>
  );
}
