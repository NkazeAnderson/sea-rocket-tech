import React, { PropsWithChildren } from "react";
import BackButton from "./BackButton";

function layout({ children }: PropsWithChildren) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[url(/giphy.gif)] bg-no-repeat bg-cover bg-black/90 bg-blend-color">
      <BackButton />
      {children}
    </div>
  );
}

export default layout;
