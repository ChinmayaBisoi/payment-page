import { Inter } from "next/font/google";
import React from "react";
import Sidebar from "../Sidebar";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <div className={`relative flex min-h-screen ${inter.className}`}>
      <Sidebar />
      <div className="pl-56 flex-grow">{children}</div>
    </div>
  );
};

export default Layout;
