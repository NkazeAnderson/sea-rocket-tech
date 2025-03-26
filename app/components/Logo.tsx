import Link from "next/link";
import React from "react";
import Image from "./ui/Image";

function Logo() {
  return (
    <Link href={"/"}>
      <div className="size-[50px] lg:size-[100px]">
        <Image src={"/sea-rocket-tech.png"} width={100} height={100} alt="" />
      </div>
    </Link>
  );
}

export default Logo;
