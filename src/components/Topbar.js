import HamburgerIcon from "@/icons/HamburgerIcon";
import Search from "@/icons/Search";
import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Icon = ({ iconSrc }) => {
  return (
    <div className="sm:w-10 sm:h-10 w-6 h-6 bg-black-90 rounded-full flex items-center justify-center">
      <Image
        alt=""
        src={`/common/${iconSrc}.svg`}
        width={20}
        height={20}
        className="sm:w-5 sm:h-5 w-3 h-3"
      />
    </div>
  );
};

const Topbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <div className="relative md:px-8 px-4 py-3 flex items-center gap-3 justify-between border-b border-black-85">
      <div className="md:hidden flex items-center justify-center">
        <button onClick={toggleMenu}>
          <HamburgerIcon />
        </button>
      </div>
      {showMenu && <Sidebar isMob toggleMenu={toggleMenu} />}
      <div className="flex items-center md:gap-3 gap-1 justify-center md:justify-stretch md:flex-1">
        <p className="text-black-12 text-[15px] leading-[22px]">Payments</p>
        <div className="flex items-center gap-[6px]">
          <Image
            alt=""
            src="/common/question-circle.svg"
            width={14}
            height={14}
            className="min-w-[14px] h-auto"
          />
          <p className="text-xs text-black-14 hidden sm:block">How it works</p>
        </div>
      </div>

      <div className="relative flex-grow sm:flex-grow-0">
        <Search
          width={16}
          height={16}
          className="absolute text-black-50 left-4 top-3 hidden sm:inline-block"
        />
        <input
          placeholder="Search features, tutorials, etc."
          className="flex-1 rounded-md w-full outline-none sm:max-w-none bg-black-95 sm:pl-10 sm:pr-4 px-4 py-2 h-10 text-[15px] leading-[22px] placeholder:text-black-50 text-black-50"
        />
      </div>
      <div className="flex items-center justify-end gap-3 sm:flex-1">
        {/* <div className="sm:hidden w-10 h-10 bg-black-90 rounded-full flex items-center justify-center">
          <Search width={20} height={20} className="" />
        </div> */}
        <Icon iconSrc="message" />
        <Icon iconSrc="chevron-down-solid" />
      </div>
    </div>
  );
};

export default Topbar;
