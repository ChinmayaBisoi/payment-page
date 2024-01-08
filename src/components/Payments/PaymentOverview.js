import ChevronDown from "@/icons/ChevronDown";
import React from "react";
import Card from "./Card";

const PaymentOverview = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-black-12 font-medium text-xl">Overview</h2>
        <div className="rounded-md pl-[14px] py-[6px] pr-[10px] text-black-30 border border-black-85 bg-white flex items-center gap-[7px]">
          <p>Last Month</p>
          <ChevronDown className="w-4 h-4 text-black-30" />
        </div>
      </div>
      <div className="mt-6 flex gap-5">
        <Card title="Online orders" subtitle="231" />
        <Card title="Amount Received" subtitle="₹23,92,312.19" />
      </div>
    </div>
  );
};

export default PaymentOverview;
