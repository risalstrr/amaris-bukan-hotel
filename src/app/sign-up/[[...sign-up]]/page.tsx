"use client";
import { SignUp } from "@clerk/nextjs";
import Lottie from "lottie-react";
import RegisterLogo from "../../../../public/register.json";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-row gap-10 p-20">
      <Lottie animationData={RegisterLogo} />
      <SignUp />
    </div>
  );
}
