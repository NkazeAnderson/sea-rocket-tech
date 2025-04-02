"use client";
import React from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Paragraph } from "../components/ui/Text";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  return (
    <div
      className="flex items-center space-x-2 fixed top-10 left-6 hover:cursor-pointer py-3"
      onClick={() => {
        router.back();
      }}
    >
      <FaCircleArrowLeft className="text-24" />
      <Paragraph>Return</Paragraph>
    </div>
  );
}

export default BackButton;
