import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/Slices/cartSlice";

const PageCard = ({ product }) => {
  const dispatch = useDispatch();
  const updateCart = () => {
    // console.log(product);
    dispatch(addItemToCart(product));
  };
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
        src={product.image}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <h2 className="text-xl font-semibold tracking-wide">{product.name}</h2>
      </div>
      <p className="dark:text-gray-100">{product.tagline}</p>
      <Button onClick={updateCart}>Add to Cart </Button>
    </div>
  );
};

export default PageCard;
