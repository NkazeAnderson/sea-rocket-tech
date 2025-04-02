import { Heading2, Paragraph } from "@/app/components/ui/Text";
import React from "react";
import Link from "next/link";
import LoginForm from "./LoginForm";

function page() {
  return (
    <div className="bg-white p-6 border border-black rounded-2xl w-3/4 lg:w-1/2">
      <Heading2 className="text-center text-purple">Log In</Heading2>
      <div className="px-[10%] py-4">
        <Paragraph className="text-gray text-center">
          Login to your account to review your projects, progress, app
          credentials and payments
        </Paragraph>
      </div>
      <LoginForm />
      <div className="mt-12">
        <Paragraph className="text-darkBlue">
          {"Don't have an account?"}
          <Link href={"/contact-us"} className="text-purple">
            Contact Us
          </Link>
        </Paragraph>
      </div>
    </div>
  );
}

export default page;
