import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const cartPageItems = useSelector((state) => state.cart.cartPageItems);
  const [orderTotal, setOrderTotal] = useState(0);

  //   const getOrderTotal = () => {
  //     let initailValue = orderTotal;
  //     cartPageItems.reduce(
  //       (acc, ele) => acc + ele.quantity * ele.price,
  //       initailValue
  //     );

  //     setOrderTotal(initailValue);
  //     console.log(orderTotal);
  //     return initailValue;
  //   };

  //   useEffect(() => {
  //     setOrderTotal();
  //   }, [orderTotal]);
  return (
    <Card>
      <Typography className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-2xl font-extrabold leading-none opacity-70">
        Order Summary
      </Typography>
      {cartPageItems.map((ele) => {
        return (
          <div
            key={ele.name}
            className="flex justify-evenly items-center mt-8 border-b border-blue-gray-100"
          >
            <>
              <Typography className="font-bold text-base ">
                {ele.name}
              </Typography>
              <Typography> x {ele.quantity}</Typography>
              <Typography>{ele.quantity * ele.price}</Typography>
            </>
          </div>
        );
      })}
    </Card>
  );
};

export default OrderSummary;
