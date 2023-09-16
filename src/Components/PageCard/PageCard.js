import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Redux/Slices/cartSlice";

const PageCard = ({ product }) => {
  const dispatch = useDispatch();
  const [addedToCart, setIsaddedtoCart] = useState(false);
  const cartPageItems = useSelector((state) => state.cart.cartPageItems);
  const updateCart = () => {
    if (!addedToCart) {
      setIsaddedtoCart(true);
      dispatch(addItemToCart(product));
    } else {
      setIsaddedtoCart(false);
      dispatch(removeItemFromCart(product.id));
    }
  };
  return (
    // <Product
    //       _id="1011"
    //       img="https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
    //       productName="Flower Base"
    //       price="35.00"
    //       color="Blank and White"
    //       badge={true}
    //       des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
    //     />



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
      <Button onClick={updateCart} variant="outlined">
        {!addedToCart ? "Add to cart" : "Remove Item"}
      </Button>
    </div>
  );
};

export default PageCard;
