import React from "react";
import FlexLayout from "./ui/FlexLayout";
import { navLinks } from "@/utils/constants";
import NavLinks from "./NavLinks";
import Button from "./ui/Button";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import NavbarClientComponent from "./NavbarClientComponent";
import Link from "next/link";

function NavBar() {
  return (
    <NavbarClientComponent>
      <FlexLayout className="justify-between gap-2 px-4 lg:px-12 py-4 items-center w-screen bg-linear-to-b from-darkBlue to-darkBlue/80 from-60% !z-50">
        <Logo />

        <div className="hidden lg:block ">
          <FlexLayout direction="row-always" className=" gap-6 items-center ">
            {navLinks.map((item) => (
              <NavLinks key={item.text} {...item} />
            ))}
          </FlexLayout>
        </div>
        <div className="hidden lg:block">
          <Link href={"/auth/login"}>
            <Button>Login</Button>
          </Link>
        </div>
        <div className="lg:hidden block">
          <MobileNavigation />
        </div>
      </FlexLayout>
    </NavbarClientComponent>
  );
}

export default NavBar;
