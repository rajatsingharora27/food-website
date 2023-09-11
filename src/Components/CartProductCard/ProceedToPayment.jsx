import React from "react";
import { useSelector } from "react-redux";

const ProceedToPayment = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="flex mx-3 gap-4 justify-center items-center m-8">
      <h2 className="text-xl font-bold">Total Amount :</h2>{" "}
      <span lassName="text-4xl ">{totalPrice} </span>
    </div>
  );
};

export default ProceedToPayment;
