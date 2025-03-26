"use client";
import React, { useContext } from "react";
import { FaGripHorizontal, FaLine } from "react-icons/fa";
import FlexLayout from "./ui/FlexLayout";
import { navLinks } from "@/utils/constants";
import NavLinks from "./NavLinks";
import { FaGrip, FaGripLines } from "react-icons/fa6";
import { AppContext, AppContextType } from "./context.tsx/AppContextProvider";

function MobileNavigation() {
  const { toggleMobileNav } = useContext(AppContext) as AppContextType;
  return (
    <div className="">
      <button
        onClick={() => {
          toggleMobileNav();
          console.log("clicked");
        }}
      >
        <FaGripLines className="size-8 text-white" />
      </button>
    </div>
  );
}

export default MobileNavigation;
