import React from "react";
import OrderSummary from "./OrderSummary";
import ProceedToPayment from "./ProceedToPayment";

const OrderSummayMainContainer = () => {
  return (
    <div className="rounded-md shadow-2xl flex-col">
      <OrderSummary />
      <ProceedToPayment />
    </div>
  );
};

export default OrderSummayMainContainer;
