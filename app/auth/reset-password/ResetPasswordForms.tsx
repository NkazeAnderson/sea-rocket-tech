"use client";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import React from "react";
import { useForm } from "react-hook-form";

function ResetPasswordForms() {
  const emailForm = useForm();
  return (
    <form className="space-y-3">
      <Input
        label="email"
        registration={emailForm.register("email")}
        type="email"
      />
      <div className="flex justify-center">
        <Button disable>Next</Button>
      </div>
    </form>
  );
}

export default ResetPasswordForms;
