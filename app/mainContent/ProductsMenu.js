"use client";

import Image from "next/image";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export default function ProductsMenu() {
  const { myProduct, cart, setCart } = useContext(ProductContext);

  const addToCart = (product) => {
    const productWithCartId = { ...product, cartId: crypto.randomUUID() }; // مفتاح فريد لكل عنصر في السلة
    setCart([...cart, productWithCartId]);
  };

  return (
    <div className="text-black bg-zinc-200 w-full h-full p-4 overflow-y-auto">
      <p className="font-bold text-2xl mb-4">Our Products</p>
      <div className="grid grid-cols-4 gap-4">
        {myProduct.map((p) => (
          <div key={p.id} className="w-60 h-60 bg-white rounded flex flex-col items-center p-2">
            <Image src={p.image} width={100} height={100} alt={p.name} />
            <p>{p.name}</p>
            <p className="mt-2">${p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="bg-blue-800 rounded w-44 h-8 text-white mt-4"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
