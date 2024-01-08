import ChevronDown from "@/icons/ChevronDown";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const sidebarItems = [
  { label: "Home", icon: "home", link: "/" },
  { label: "Orders", icon: "orders", link: "/" },
  { label: "Products", icon: "products", link: "/" },
  { label: "Delivery", icon: "delivery", link: "/" },
  { label: "Marketing", icon: "marketing", link: "/" },
  { label: "Analytics", icon: "analytics", link: "/" },
  { label: "Payments", icon: "payments", link: "/", isActive: true },
  { label: "Tools", icon: "tools", link: "/" },
  { label: "Discounts", icon: "discounts", link: "/" },
  { label: "Audience", icon: "audience", link: "/" },
  { label: "Appearance", icon: "appearance", link: "/" },
  { label: "Plugins", icon: "plugins", link: "/" },
];

const Sidebar = () => {
  return (
    <aside className="w-56 bg-secondary-navbar text-white absolute left-0 h-screen flex flex-col">
      <div className="flex items-center gap-3 p-4 pb-6">
        <Image src="/stores/nishyon.svg" width={40} height={40} alt="" />
        <div className="flex-grow">
          <p className="font-medium text-[15px] leading-[22px]">Nishyan</p>
          <Link href="/" className="underline opacity-80">
            Visit store
          </Link>
        </div>
        <ChevronDown className="text-white" />
      </div>

      <nav className="flex flex-col flex-grow gap-1 px-2">
        {sidebarItems.map(({ label, isActive, link, icon }) => {
          return (
            <Link
              key={label}
              href={link}
              className={`flex items-center gap-3 px-4 py-2 rounded-md ${
                isActive ? "bg-white/10 opacity-100" : ""
              } hover:bg-white/10 opacity-80 hover:opacity-100  text-sm font-medium`}>
              <Image
                src={`/sidebar/${icon}.svg`}
                width={20}
                height={20}
                alt=""
              />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 bg-[#353C53] m-4 py-[6px] flex gap-3 rounded-md">
        <Image
          src={`/sidebar/home.svg`}
          width={36}
          alt=""
          height={36}
          className="rounded-md bg-white/10 p-[6px]"
        />
        <div className="">
          <p className="text-white/80 text-sm leading-4">Available Credits</p>
          <p className=" font-medium leading-6">222.10</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
