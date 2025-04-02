import { Heading2, Paragraph } from "@/app/components/ui/Text";
import React from "react";
import Link from "next/link";
import ResetPasswordForms from "./ResetPasswordForms";

function page() {
  return (
    <div className="bg-white p-6 border border-black rounded-2xl w-3/4 lg:w-1/2">
      <Heading2 className="text-center text-purple">Recover Password</Heading2>
      <div className="px-[10%] py-4">
        <Paragraph className="text-gray text-center">
          Forget your password? Follow our secure password recovery process
        </Paragraph>
      </div>
      <ResetPasswordForms />
      <div className="mt-12">
        <Paragraph className="text-darkBlue">
          Got your password?{" "}
          <Link href={"/auth/login"} className="text-purple">
            Login
          </Link>
        </Paragraph>
      </div>
    </div>
  );
}

export default page;
