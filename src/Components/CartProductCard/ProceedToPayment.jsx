import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProceedToPayment = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate("/customer-details");

  return (
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
