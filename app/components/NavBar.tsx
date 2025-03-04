import React from "react";
import FlexLayout from "./ui/FlexLayout";
import Image from "./ui/Image";
import { navLinks } from "@/utils/constants";
import NavLinks from "./NavLinks";
import Button from "./ui/Button";
import Logo from "../../assets/sea-rocket-tech.png";

function NavBar() {
  return (
    <FlexLayout className="justify-between gap-2 px-12 py-4 items-center">
      <div className="size-[100px]">
        <img src={"/sea-rocket-tech.png"} />
      </div>
      <FlexLayout direction="row-large-only" className=" gap-6 items-center">
        {navLinks.map((item) => (
          <NavLinks key={item.text} {...item} />
        ))}
      </FlexLayout>
      <div>
        <Button>Login</Button>
      </div>
    </FlexLayout>
  );
}

export default NavBar;
