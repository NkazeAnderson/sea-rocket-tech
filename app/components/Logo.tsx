import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <div className="size-[100px]">
        <img src={"/sea-rocket-tech.png"} />
      </div>
    </Link>
  );
}

export default Logo;
