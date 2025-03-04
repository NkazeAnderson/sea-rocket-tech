import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const textClasses = tv({
  variants: {
    color: {
      black: " text-black",
      white: " text-white ",
      purple: "text-purple",
      blue: "text-blue",
    },
    "color-hover": {
      black: " hover:text-black",
      white: " hover:text-white ",
      purple: "hover:text-purple",
      blue: "hover:text-blue",
    },
    alignment: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
  },
  defaultVariants: {
    color: "white",
    alignment: "left",
  },
});

interface textClassesI extends VariantProps<typeof textClasses> {}

interface TextProps extends textClassesI {
  children: React.ReactNode;
  className?: string;
}

export function Heading1(props: TextProps) {
  return (
    <h1
      className={`font-poppins font-bold text-64 ${textClasses(props)} ${
        props.className && props.className
      }`}
    >
      {props.children}
    </h1>
  );
}

export function Heading2(props: TextProps) {
  return (
    <h2
      className={`font-poppins font-bold text-36 ${textClasses(props)} ${
        props.className && props.className
      }`}
    >
      {props.children}
    </h2>
  );
}

export function Heading3(props: TextProps) {
  return (
    <h3
      className={`font-poppins font-bold text-24 ${textClasses(props)} ${
        props.className && props.className
      }`}
    >
      {props.children}
    </h3>
  );
}

export function Paragraph(props: TextProps) {
  return (
    <p
      className={`font-poppins text-16 ${textClasses(props)} ${
        props.className && props.className
      }`}
    >
      {props.children}
    </p>
  );
}
