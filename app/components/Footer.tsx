import React from "react";
import FlexLayout from "./ui/FlexLayout";
import Logo from "./Logo";
import { Heading3 } from "./ui/Text";
import Link from "next/link";
import { companyInformation, navLinks } from "@/utils/constants";

function Footer() {
  return (
    <footer className="mt-10">
      <FlexLayout
        direction="row-large-only"
        className=" px-7 py-10 bg-black justify-between gap-5 lg:gap-1 lg:items-center text-white"
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
          {companyInformation.map((item) => (
            <FlexLayout
              key={item.info}
              direction="row-always"
              className="py-2 gap-2 items-center"
            >
              <p className=" capitalize">{item.name}:</p>
              <Link
                className={`text-white ${
                  (item.type === "email" || item.type === "phone") &&
                  "underline"
                }`}
                href={
                  item.type === "phone"
                    ? `tel:${item.info}`
                    : item.type === "email"
                    ? `mailto:${item.info}`
                    : "https://googlemaps.com"
                }
              >
                {item.info}
              </Link>
            </FlexLayout>
          ))}
        </FlexLayout>
        <small className="text-center">Digital Brilliance Solutions © 2025</small>
      </FlexLayout>
    </footer>
  );
}

export default Footer;
