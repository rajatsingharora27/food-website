import React from "react";
import CartProductCard from "../../Components/CartProductCard/CartProductCard";
import OrderSummayMainContainer from "../../Components/CartProductCard/OrderSummayMainContainer";

const Cart = () => {
  return (
    <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-3 md:justify-between mx-7 py-10">
      <div className="  border-solid md:w-3/4 ">
        <CartProductCard />
      </div>
      <div className=" border-solid border-yellow-700 border-2 md:w-1/4">
        <OrderSummayMainContainer />
      </div>
    </div>
  );
};

export default Cart;
