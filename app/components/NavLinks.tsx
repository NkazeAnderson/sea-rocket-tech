"use client";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";
import { Paragraph } from "./ui/Text";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/types";

function NavLinks(props: NavLinkProps) {
  const path = usePathname();
  const isActive = path === props.href;
  return (
    <Link href={props.href}>
      <Paragraph
        color={isActive ? "purple" : "white"}
        color-hover="purple"
        className=" capitalize font-bold"
      >
        {props.text}
      </Paragraph>
    </Link>
  );
}

export default NavLinks;
