import { Card, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const cartPageItems = useSelector((state) => state.cart.cartPageItems);

  return (
    // <Card>
    //   <Typography className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-2xl font-extrabold leading-none opacity-70 font-sans">
    //     Order Summary
    //   </Typography>
    //   {cartPageItems.map((ele) => {
    //     return (
    //       <div
    //         key={ele.name}
    //         className="flex justify-evenly items-center mt-8 border-b border-blue-gray-100 font-sans"
    //       >
    //         <>
    //           <Typography className="font-bold text-base font-sans">
    //             {ele.name}
    //           </Typography>
    //           <Typography> x {ele.quantity}</Typography>
    //           <Typography>{ele.quantity * ele.price}</Typography>
    //         </>
    //       </div>
    //     );
    //   })}
    // </Card>

    <div class="col-span-1 bg-white lg:block hidden">
      <h1 class="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
      <ul class="py-6 border-b space-y-6 px-8">
        {cartPageItems.map((ele) => {
          return (
            <li class="grid grid-cols-6 gap-2 border-b-1">
              <div class="col-span-1 self-center">
                <img src={ele.image} alt="Product" class="rounded w-full" />
              </div>
              <div class="flex flex-col col-span-3 pt-2">
                <span class="text-gray-600 text-md font-semi-bold">
                  {ele.name}
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
