import React from "react";
import FlexLayout from "./ui/FlexLayout";
import Image from "./ui/Image";
import { Paragraph } from "./ui/Text";
import { TechStackProps } from "@/types";

function OurStackCard({ info }: { info: TechStackProps }) {
  return (
    <FlexLayout
      direction="column-always"
      className=" justify-center gap-1 items-center"
    >
      <div className="size-[100]">
        <Image src={info.image} width={100} height={100} alt="technology" />
      </div>
      <Paragraph className="font-bold">{info.title}</Paragraph>
    </FlexLayout>
  );
}

export default OurStackCard;
