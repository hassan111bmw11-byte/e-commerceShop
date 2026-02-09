"use client";

import Image from "next/image";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export default function CartPage({ onClose }) {
  const { cart, removeFromCart } = useContext(ProductContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col justify-between w-96 h-125  bg-blue-700 rounded-2xl absolute right-4 top-4 z-50 p-4">
      <p onClick={onClose} className="cursor-pointer text-right font-bold mb-2">
        x
      </p>
      <p className="text-center font-bold text-2xl">Shopping Cart</p>
      <hr className="my-2" />

      <div className="overflow-y-auto h-max-75">
        {cart.map((item) => (
          <div
            key={item.cartId}
            className="flex items-center text-black bg-white rounded p-2 mt-2"
          >
            <Image src={item.image} width={50} height={50} alt={item.name} />
            <div className="ml-4 flex flex-col">
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.cartId)}
              className="ml-auto bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <hr className="my-2" />
      <div className="flex justify-between font-bold">
        <p>Total</p>
        <p>${total}</p>
      </div>
      <button className="bg-white text-black rounded mt-2 h-10 w-full">
        Checkout
      </button>
    </div>
  );
}
