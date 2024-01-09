import React from "react";
import PaymentOverview from "./PaymentOverview";
import Transactions from "./Transactions";

const PaymentContent = () => {
  return (
    <div className="md:p-8 p-4 bg-neutral-100">
      <PaymentOverview />
      <Transactions />
    </div>
  );
};

export default PaymentContent;
