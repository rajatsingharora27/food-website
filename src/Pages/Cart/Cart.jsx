import React from "react";
import CartProductCard from "../../Components/CartProductCard/CartProductCard";
import OrderSummayMainContainer from "../../Components/CartProductCard/OrderSummayMainContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Cart = () => {
  const cartPageItems = useSelector((state) => state.cart.cartPageItems);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-3 md:justify-between mx-7 py-10">
      {cartPageItems.length > 0 ? (
        <>
          <div className="  shadow-2xl rounded-lg md:w-3/4 ">
            <CartProductCard />
          </div>
          <div className="  md:w-1/4">
            <OrderSummayMainContainer />
          </div>
        </>
      ) : (
        <div>
          <h2>Cart is Empty go back to home Page?</h2>

          <Button onClick={() => navigate("/")}>Home</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
