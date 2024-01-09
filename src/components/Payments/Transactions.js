import Search from "@/icons/Search";
import Image from "next/image";
import React from "react";
import Pagination from "../Pagination";

const TABLE_HEADINGS = [
  { label: "Order ID" },
  { label: "Order Date", icon: "chevron-down-solid", iconSize: 8 },
  { label: "Order Amount" },
  { label: "Transaction fees", icon: "info", iconSize: 14 },
];

const TABLE_ROW_ITEMS = ["#281209", "7 July, 2023", "₹1,278.23", "₹22"];

const NUM_TABLE_ROW = 10;

const TableHeading = () => {
  return (
    <thead className="">
      <tr className=" rounded-md text-sm">
        {TABLE_HEADINGS.map((item, index) => {
          const isRightAligned = index >= TABLE_HEADINGS.length / 2;
          return (
            <td
              key={index}
              className={`font-medium py-[10px] bg-black-95 first:rounded-l-md last:rounded-r-md first:pl-3 pr-3 text-black-30 ${
                isRightAligned ? "text-right" : ""
              }`}>
              {item.label}
              {item.icon && (
                <Image
                  alt=""
                  src={`/common/${item.icon}.svg`}
                  width={item.iconSize}
                  height={item.iconSize}
                  className="inline-block ml-1"
                />
              )}
            </td>
          );
        })}
      </tr>
    </thead>
  );
};

const TableRow = () => {
  return (
    <tbody className="">
      {new Array(NUM_TABLE_ROW).fill(null).map((_, index) => {
        return (
          <tr key={index} className="text-sm">
            {TABLE_ROW_ITEMS.map((item, index) => {
              const isRightAligned = index >= TABLE_ROW_ITEMS.length / 2;
              return (
                <td
                  key={index}
                  className={`border-b border-black-90 first:pl-3 pr-3 py-[14px]
            first:text-primary-blue first:font-medium text-black-12
             ${isRightAligned ? "text-right" : ""}
            `}>
                  {item}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

const Transactions = () => {
  return (
    <div className="mt-8">
      <h3 className="text-black-12 font-medium text-xl mb-5">
        Transactions | This Month
      </h3>
      <div className="bg-white rounded-lg p-3 pb-6">
        <div className="flex justify-between gap-1 items-center">
          <div className="relative">
            <Search className="w-[14px] h-[14px] absolute sm:left-4 left-2 top-[13px] text-black-60" />
            <input
              placeholder="Search features, tutorials, etc."
              className="w-[248px] rounded-md outline-none bg-black-95 sm:pl-[38px] pl-7 sm:pr-4 pr-2 py-[10px] h-10 text-sm placeholder:text-black-60 text-black-60"
            />
          </div>
          <div className="flex items-center flex-shrink-0 md:gap-3 gap-1">
            <div className="border border-black-85 rounded-md flex items-center gap-[6px] p-1 sm:p-2 md:pl-3 md:py-[6px] md:pr-[10px]">
              <p className="text-black-30 hidden md:block">Sort</p>
              <Image
                alt=""
                src="/common/sort.svg"
                width={16}
                height={16}
                className="w-5 h-5 md:w-3 md:h-3"
              />
            </div>
            <div className="p-1 sm:p-2  border border-black-85 rounded-md">
              <Image alt="" src="/common/download.svg" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className="pt-3">
          <table className="w-full">
            <TableHeading />
            <TableRow />
          </table>
        </div>
        <div className="mt-6 flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
