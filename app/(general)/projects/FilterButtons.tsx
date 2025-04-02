"use client";
import React, { useState } from "react";
import FlexLayout from "../../components/ui/FlexLayout";
import FilterButton from "../../components/FilterButton";

const options = ["all", "websites", "android", "iPhone", "backend"];

function FilterButtons() {
  const [active, setActive] = useState<string[]>(["all"]);
  function toggle(option: string) {
    setActive((prev) => {
      if (!prev.includes(option)) {
        return [...prev, option];
      }
      return [...prev].filter((item) => item !== option);
    });
  }
  return (
    <FlexLayout direction="row-always" className=" items-center gap-4">
      <p className=" font-bold">View: </p>
      {options.map((item) => (
        <FilterButton
          key={item}
          option={item}
          options={active}
          toggle={toggle}
        />
      ))}
    </FlexLayout>
  );
}

export default FilterButtons;
