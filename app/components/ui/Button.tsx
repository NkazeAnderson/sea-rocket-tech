"use client";

import React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { Paragraph } from "./Text";

const buttonClasses = tv({
  base: "px-6 py-4 rounded-2xl bg-purple hover:bg-blue text-white text-16 font-semibold hover:cursor-pointer",
  variants: {
    fullWidth: {
      true: "w-full",
    },
    disable: {
      true: "bg-gray/30",
    },
  },
});

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  onClick?: VoidFunction;
}

function Button(props: ButtonProps) {
  return (
    <button className={buttonClasses(props)} onClick={props.onClick}>
      <Paragraph>{props.children}</Paragraph>
    </button>
  );
}

export default Button;
