import React, { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

function Input({
  label,
  type,
  registration,
}: {
  label?: string;
  type: HTMLInputTypeAttribute;
  registration: UseFormRegisterReturn;
}) {
  return (
    <div>
      <label
        className=" capitalize text-darkBlue font-medium text-[18px] inline-block mb-1 focus:text-purple"
        htmlFor={registration.name}
      >
        {label}
      </label>
      <input
        id={registration.name}
        type={type}
        className="px-5 py-2 bg-white text-darkBlue border-2 border-gray rounded-lg block w-full focus:outline-0 focus:border-b-4 focus:border-purple"
        {...registration}
      />
    </div>
  );
}

export default Input;
