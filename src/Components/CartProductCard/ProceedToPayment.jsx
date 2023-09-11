import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProceedToPayment = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate("/customer-details");

  return (
    // <div className="flex flex-col mx-3 gap-4 justify-center items-center m-8 p-2">
    //   <div className="flex">
    //     <h2 className="text-2xl font-sans">Total Amount :</h2>
    //     <span className="text-4xl font-sans ">{totalPrice} </span>
    //   </div>
    //   <Button
    //     className="bg-[var(--background-color)] text-white font-bold shadow-xl w-full"
    //     onClick={() => navigate("/customer-details")}
    //   >
    //     Proceed to Payment
    //   </Button>
    // </div>

    <>
      <div class="px-8 border-b">
        <div class="flex justify-between py-4 text-gray-600">
          <span>Subtotal</span>
          <span class="font-semibold text-pink-500">₹{totalPrice}</span>
        </div>
        <div class="flex justify-between py-4 text-gray-600">
          <span>Shipping</span>
          <span class="font-semibold text-pink-500">Free</span>
        </div>
      </div>
      <div class="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
        <span>Total</span>
        <span>₹{totalPrice}</span>
      </div>
      <Button
        className="bg-[var(--background-color)] text-white font-bold shadow-xl w-full"
        onClick={() => navigate("/customer-details")}
      >
        Proceed to Payment
      </Button>
    </>
  );
};

export default ProceedToPayment;
