import Image from "next/image";
import React from "react";

const Icon = ({ iconSrc }) => {
  return (
    <div className="w-10 h-10 bg-black-90 rounded-full flex items-center justify-center">
      <Image src={`/common/${iconSrc}.svg`} width={20} height={20} />
    </div>
  );
};

const Topbar = () => {
  return (
    <div className="px-8 py-3 flex items-center gap-3 justify-between border-b border-black-85">
      <div className="flex items-center gap-3 flex-1">
        <p className="text-black-12 text-[15px] leading-[22px]">Payments</p>
        <div className="flex items-center gap-[6px]">
          <Image src="/common/question-circle.svg" width={14} height={14} />
          <p className="text-xs text-black-14">How it works</p>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/common/search.svg"
          width={16}
          height={16}
          className="absolute left-4 top-3"
        />
        <input
          placeholder="Search features, tutorials, etc."
          className="flex-1 rounded-md outline-none bg-black-95 pl-10 pr-4 py-2 h-10 text-[15px] leading-[22px] placeholder:text-black-50 text-black-50"
        />
      </div>
      <div className="flex items-center justify-end gap-3 flex-1">
        <Icon iconSrc="message" />
        <Icon iconSrc="chevron-down-solid" />
      </div>
    </div>
  );
};

export default Topbar;
