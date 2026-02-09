"use client";

import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// المنتجات الافتراضية
const defaultProducts = [
  { id: uuidv4(), image: "/myiamge/black-headphone.png", name: "Wireless Headphone", price: 99, category: "electronics" },
  { id: uuidv4(), image: "/myiamge/book.jpg", name: "Novel Book", price: 15, category: "books" },
  { id: uuidv4(), image: "/myiamge/laptop2.png", name: "Laptop", price: 249, category: "electronics" },
  { id: uuidv4(), image: "/myiamge/camera2.webp", name: "Digital Camera", price: 449, category: "electronics" },
  { id: uuidv4(), image: "/myiamge/iphone.webp", name: "Smartphone", price: 599, category: "electronics" },
  { id: uuidv4(), image: "/myiamge/dress.jpg", name: "Women Dress", price: 25, category: "clothing" },
];

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [myProduct, setMyProduct] = useState(defaultProducts);
  const [cart, setCart] = useState([]);

  const searchProducts = (query) => {
    if (!query) {
      setMyProduct(defaultProducts);
      return;
    }
    const filtered = defaultProducts.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setMyProduct(filtered);
  };

  const filterByCategory = (category) => {
    if (category === "all") {
      setMyProduct(defaultProducts);
    } else {
      setMyProduct(defaultProducts.filter((p) => p.category === category));
    }
  };

  const filterByPrice = (min, max) => {
    setMyProduct(defaultProducts.filter((p) => p.price >= min && p.price <= max));
  };

  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  return (
    <ProductContext.Provider
      value={{
        myProduct,
        setMyProduct,
        cart,
        setCart,
        searchProducts,
        filterByCategory,
        filterByPrice,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
