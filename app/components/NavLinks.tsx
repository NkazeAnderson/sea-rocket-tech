"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { Paragraph } from "./ui/Text";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/types";
import { AppContext, AppContextType } from "./context.tsx/AppContextProvider";

function NavLinks(props: NavLinkProps) {
  const path = usePathname();
  const isActive = path === props.href;
  const { mobileNavIsOpen, toggleMobileNav } = useContext(
    AppContext
  ) as AppContextType;
  return (
    <Link
      href={props.href}
      onClick={() => {
        if (mobileNavIsOpen)
          setTimeout(() => {
            toggleMobileNav();
          }, 1000);
      }}
    >
      <Paragraph
        color={isActive ? "purple" : "white"}
        color-hover="purple"
        className=" capitalize font-semibold"
      >
        {props.text}
      </Paragraph>
    </Link>
  );
}

export default NavLinks;
