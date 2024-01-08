import ChevronDown from "@/icons/ChevronDown";
import React from "react";

const items = [
  "1",
  "...",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
];

const Button = ({ className = "", title = "", isNext = false }) => {
  return (
    <button
      className={`${
        isNext ? "pl-3" : "pr-3"
      } px-[6px] py-[7px] font-medium text-sm text-black-30 border border-black-85 rounded-md flex gap-[6px] items-center ${className}`}>
      <ChevronDown
        className={`transform ${
          isNext ? "-rotate-90" : "rotate-90"
        }  w-[18px] h-[18px]`}
      />
      <span>{title}</span>
    </button>
  );
};

const Pagination = () => {
  return (
    <div className="flex items-center gap-6">
      <Button title="Previous" />
      <div className="flex items-center gap-2">
        {items.map((item) => {
          const isActive = item === "10";
          return (
            <button
              key={item}
              className={`w-7 h-7 rounded-md ${
                isActive
                  ? "bg-primary-blue text-white font-medium"
                  : "text-black-30 hover:bg-neutral-100"
              }`}>
              {item}
            </button>
          );
        })}
      </div>
      <Button title="Next" isNext className="flex-row-reverse" />
    </div>
  );
};

export default Pagination;
