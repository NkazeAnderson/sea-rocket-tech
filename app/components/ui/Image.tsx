import React from "react";
import { tv, VariantProps } from "tailwind-variants";
import NextImage from "next/image";

const imageclasses = tv({
  base: "size-full",
  variants: {
    rounded: {
      full: " rounded-full",
      md: "rounded-2xl",
    },
    coverage: {
      cover: "object-cover",
      contain: "object-contain",
    },
  },
});

interface ImageProps extends VariantProps<typeof imageclasses> {
  src: string;
  width: number;
  height: number;
  alt?: string;
}
function Image(props: ImageProps) {
  return (
    <NextImage
      className={imageclasses(props)}
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt ?? "image"}
    />
  );
}

export default Image;
