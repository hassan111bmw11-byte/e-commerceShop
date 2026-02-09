"use client";

import { useState } from "react";
import { ProductContext } from "../context/productContext";
import SearchAppBar from "./SearchAppBar";
import SideMenu from "./SideMenu";
import ProductsMenu from "./ProductsMenu";
import { v4 as uuidv4 } from "uuid";

const initialProducts = [
  {
    id: uuidv4(),
    image: "/myimage/black-headphone.png",
    name: "Wireless Headphone",
    price: 99,
    category: "electronics",
  },
  {
    id: uuidv4(),
    image: "/myimage/book.jpg",
    name: "Novel Book",
    price: 15,
    category: "books",
  },
  {
    id: uuidv4(),
    image: "/myimage/laptop2.png",
    name: "Laptop",
    price: 249,
    category: "electronics",
  },
  {
    id: uuidv4(),
    image: "/myimage/camera2.webp",
    name: "Digital Camera",
    price: 449,
    category: "electronics",
  },
  {
    id: uuidv4(),
    image: "/myimage/iphone.webp",
    name: "Smartphone",
    price: 599,
    category: "electronics",
  },
  {
    id: uuidv4(),
    image: "/myimage/dress.jpg",
    name: "Women Dress",
    price: 25,
    category: "clothing",
  },
];

export default function MainContent() {
  const [myProduct, setMyProduct] = useState(initialProducts);
  const [allProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const removeFromCart = (cartId) =>
    setCart(cart.filter((item) => item.cartId !== cartId));
  const filterByCategory = (category) => {
    if (category === "all") {
      setMyProduct(allProducts); // تأكد من استخدام allProducts وليس initialProducts مباشرة
    } else {
      setMyProduct(allProducts.filter((p) => p.category === category));
    }
  };

  const searchProducts = (query) =>
    !query
      ? setMyProduct(allProducts)
      : setMyProduct(
          allProducts.filter((p) =>
            p.name.toLowerCase().includes(query.toLowerCase()),
          ),
        );
  const filterByPrice = (range) =>
    setMyProduct(
      allProducts.filter((p) => p.price >= range[0] && p.price <= range[1]),
    );

  return (
    <ProductContext.Provider
      value={{
        myProduct,
        setMyProduct,
        cart,
        setCart,
        removeFromCart,
        filterByCategory,
        searchProducts,
        filterByPrice,
      }}
    >
      <div className="flex flex-col w-screen h-screen">
        <SearchAppBar />
        <div className="flex flex-1">
          <SideMenu />
          <ProductsMenu />
        </div>
      </div>
    </ProductContext.Provider>
  );
}
