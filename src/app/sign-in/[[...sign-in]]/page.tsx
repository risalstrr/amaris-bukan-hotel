"use client";
import { SignIn } from "@clerk/nextjs";
import Lottie from "lottie-react";
import LoginLogo from "../../../../public/login.json";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-row gap-10 p-24">
      <Lottie className="w-80" animationData={LoginLogo} />
      <SignIn />
    </div>
  );
}
