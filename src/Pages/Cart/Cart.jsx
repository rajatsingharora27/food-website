import React from "react";
import CartProductCard from "../../Components/CartProductCard/CartProductCard";

const Cart = () => {
  return (
    <div className="grid grid-cols-12 pt-8">
      <div className=" col-span-8 border-solid border-red-700 border-2">
        <CartProductCard />
      </div>
      <div className="col-span-4 border-solid border-yellow-700 border-2">
        hi
      </div>
    </div>
  );
};

export default Cart;
