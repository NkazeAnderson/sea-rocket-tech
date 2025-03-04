import React from "react";
import FlexLayout from "./ui/FlexLayout";
import Image from "./ui/Image";
import { Paragraph } from "./ui/Text";
import { IconCardProps } from "@/types";

function IconCard({ info }: { info: IconCardProps }) {
  return (
    <FlexLayout direction="row-always" className="gap-2">
      <FlexLayout className="size-20 bg-gray/60 border-purple stroke-purple border-2 rounded-full p-4">
        <Image src={info.icon} width={80} height={80} />
      </FlexLayout>
      <FlexLayout direction="column-always" className="gap-2 justify-center">
        <Paragraph color="purple" className="font-bold">
          {info.heading}
        </Paragraph>
        <Paragraph>{info.description}</Paragraph>
      </FlexLayout>
    </FlexLayout>
  );
}

export default IconCard;
