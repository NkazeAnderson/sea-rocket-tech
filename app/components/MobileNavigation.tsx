"use client";
import { useContext } from "react";
import { FaCircleUp, FaGripLines } from "react-icons/fa6";
import { AppContext, AppContextType } from "./context.tsx/AppContextProvider";

function MobileNavigation() {
  const { toggleMobileNav, mobileNavIsOpen } = useContext(
    AppContext
  ) as AppContextType;
  return (
    <div className="">
      {mobileNavIsOpen ? (
        <button
          onClick={() => {
            toggleMobileNav();
          }}
        >
          <FaCircleUp className="size-6 text-white" />
        </button>
      ) : (
        <button
          onClick={() => {
            toggleMobileNav();
          }}
        >
          <FaGripLines className="size-8 text-white" />
        </button>
      )}
    </div>
  );
}

export default MobileNavigation;
