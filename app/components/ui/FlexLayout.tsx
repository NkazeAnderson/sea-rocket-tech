import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const layoutClasses = tv({
  base: " flex",
  variants: {
    direction: {
      "row-always": "flex-row",
      "row-large-only": "flex-col lg:flex-row ",
      "column-always": "flex-col",
    },
    container: {
      true: "px-4 lg:px-12",
    },
  },
});

interface LayoutProps
  extends React.PropsWithChildren,
    VariantProps<typeof layoutClasses> {
  className?: string;
}

function FlexLayout(props: LayoutProps) {
  return (
    <div className={`${layoutClasses(props)} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default FlexLayout;
