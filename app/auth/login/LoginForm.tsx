"use client";

import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { Paragraph } from "@/app/components/ui/Text";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

function LoginForm() {
  const { register } = useForm();
  const [seePassword, setSeePassword] = useState(false);
  function toggleSeePassword() {
    setSeePassword((prev) => !prev);
  }

  return (
    <form>
      <div className=" space-y-5">
        <Input label="email" registration={register("email")} type="email" />
        <div>
          <div className="flex flex-row items-center gap-1">
            <div className="flex-grow">
              <Input
                label="password"
                type={seePassword ? "text" : "password"}
                registration={register("password")}
              />
            </div>
            <div className="text-black py-2">
              {seePassword ? (
                <div onClick={toggleSeePassword}>
                  <FaEye className="text-24" />
                </div>
              ) : (
                <div
                  className="hover:cursor-pointer"
                  onClick={toggleSeePassword}
                >
                  <FaEyeSlash className="text-24" />
                </div>
              )}
            </div>
          </div>
          <Paragraph className="text-[tomato] underline py-1">
            <Link href={"/auth/reset-password"}>Forgot password</Link>
          </Paragraph>
        </div>
        <div className="flex justify-center">
          <Button>Log In</Button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
