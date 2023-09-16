import React from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const cartPageItems = useSelector((state) => state.cart.cartPageItems);

  return (
    <div class="col-span-1 bg-white lg:block hidden">
      <h1 class="py-6 border-b-2 text-3xl text-gray-600 px-8 font-sans ">
        Order Summary
      </h1>
      <ul class="py-6 border-b space-y-6 px-8">
        {cartPageItems.map((ele) => {
          return (
            <li class="grid grid-cols-6 gap-2 border-b-1">
              <div class="col-span-1 self-center">
                <img src={ele.img} alt="Product" class="rounded w-full" />
              </div>
              <div class="flex flex-col col-span-3 pt-2">
                <span class="text-gray-600 text-md font-semi-bold">
                  {ele.productName}
                </span>
                {/* <span class="text-gray-400 text-sm inline-block pt-2">
                  Red Headphone
                </span> */}
              </div>
              <div class="col-span-2 pt-3">
                <div class="flex items-center space-x-2 text-sm justify-between">
                  <span class="text-gray-400">
                    {ele.quantity}x ₹{ele.price}
                  </span>
                  <span class="text-pink-400 font-semibold inline-block">
                    ₹{ele.quantity * ele.price}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OrderSummary;
