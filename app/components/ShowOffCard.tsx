import React from "react";
import FlexLayout from "./ui/FlexLayout";
import Image from "./ui/Image";
import { Heading2, Paragraph } from "./ui/Text";
import Button from "./ui/Button";
import { showOffCardProps } from "@/types";
import Link from "next/link";

function ShowOffCard({
  info,
  buttonText,
  reversed,
  purple,
}: {
  info: showOffCardProps;
  buttonText: string;
  reversed?: boolean;
  purple?: boolean;
}) {
  return (
    <FlexLayout
      className={`items-center py-9 px-4 rounded-2xl ${
        purple
          ? "bg-gradient-to-r from-[#4B3CFF]/60 to-[#4B3CFF]"
          : "bg-black/60"
      } gap-6 ${reversed ? "flex-row-reverse" : "flex-row"}`}
    >
      <FlexLayout className=" flex-1/2">
        <div className="max-w-[500px]">
          <Image src={info.image} width={500} height={400} alt="projectimage" />
        </div>
      </FlexLayout>
      <FlexLayout direction="column-always" className=" flex-1/2 gap-4">
        <Heading2>{info.title}</Heading2>
        <Paragraph>{info.description}</Paragraph>
        <div>
          {info.link && (
            <Link href={info.link}>
              <Button>{buttonText}</Button>
            </Link>
          )}
        </div>
      </FlexLayout>
    </FlexLayout>
  );
}

export default ShowOffCard;
