import React from "react";
import { Heading1 } from "./ui/Text";

function PageHeader({ title }: { title: string }) {
  return (
    <section className="w-full h-[30vh] bg-[url(/developer-laptop.jpg)] bg-center bg-cover bg-fixed flex items-center justify-center bg-black/60 bg-blend-color ">
      <div>
        <Heading1>{title}</Heading1>
        <p className="font-bold underline text-center tracking-widest">
          Digital Brilliance Solutions
        </p>
      </div>
    </section>
  );
}

export default PageHeader;
