import React from "react";
import FlexLayout from "./ui/FlexLayout";
import Logo from "./Logo";
import { Heading3 } from "./ui/Text";
import Link from "next/link";
import { navLinks } from "@/utils/constants";

function Footer() {
  return (
    <footer className="mt-10">
      <FlexLayout
        direction="row-large-only"
        className="px-7 py-10 bg-black justify-between items-center text-white"
      >
        <div>
          <Logo />
        </div>
        <FlexLayout direction="column-always" className="gap-3">
          <Heading3>Quick Links</Heading3>
          {navLinks.map((item) => (
            <Link key={item.text} href={item.href}>
              {item.text}
            </Link>
          ))}
        </FlexLayout>
        <FlexLayout direction="column-always" className="gap-3">
          <Heading3>Contacts</Heading3>
          <p>
            <b>Phone:</b>{" "}
            <Link className="underline" href={"tel:567 6768877"}>
              {" "}
              +1 787 8887 7787
            </Link>
          </p>
          <p>
            <b>Email:</b>{" "}
            <Link className="underline" href={"mailto:info@searockettech.com"}>
              {" "}
              info@searockettech.com
            </Link>
          </p>
          <p>
            <b>Address:</b>{" "}
            <Link href={"https:googlemaps.com"}> Washington, USA</Link>
          </p>
        </FlexLayout>
        <small>Sea Rocket Tech © 2025</small>
      </FlexLayout>
    </footer>
  );
}

export default Footer;
