import React from "react";

const Card = ({ title = "", subtitle = "" }) => {
  return (
    <div
      style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
      className="bg-white flex-1 flex flex-col gap-4 p-[20px] rounded-lg">
      <p className="text-black-30">{title}</p>
      <p className="text-black-12 font-medium text-[32px] leading-[38px]">
        {subtitle}
      </p>
    </div>
  );
};

export default Card;
