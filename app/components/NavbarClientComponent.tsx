"use client";

import React, { PropsWithChildren, useContext } from "react";
import { AppContext, AppContextType } from "./context.tsx/AppContextProvider";
import navImage from "../../assets/TechTeam_HeroNew.webp";
import NavLinks from "./NavLinks";
import { navLinks } from "@/utils/constants";
import FlexLayout from "./ui/FlexLayout";
import Image from "next/image";

function NavbarClientComponent({ children }: PropsWithChildren) {
  const { mobileNavIsOpen } = useContext(AppContext) as AppContextType;
  return (
    <nav className="sticky top-0 ">
      <>
        {mobileNavIsOpen && (
          <div className="absolute top-[80%] w-full h-screen bg-darkBlue/70 flex flex-col z-0">
            <FlexLayout
              direction="column-always"
              className=" gap-6 items-center   px-2  bg-darkBlue py-[15vh]"
            >
              {navLinks.map((item) => (
                <NavLinks key={item.text} {...item} />
              ))}
            </FlexLayout>
            <div className="flex-grow w-full">
              <Image
                className="w-full h-full"
                src={navImage}
                width={440}
                height={440}
                alt="nav image"
              />
            </div>
          </div>
        )}
      </>
      {children}
    </nav>
  );
}

export default NavbarClientComponent;
