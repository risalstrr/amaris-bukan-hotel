// import Header from "@/components/header";

// export default function Home() {
//   return (
//     <div>
//       <Header />
//       <h1 className="font-bold text-center mt-10">Home page</h1>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [load, setload] = useState(true);

  useEffect(() => {
    setload(false);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen bg-primaryYellow">
      <div
        className={`absolute bottom-[10%] flex flex-col w-full justify-center items-center ${
          load ? "gap-40" : "gap-10"
        } transition-all duration-[2000ms] ease-in-out`}
      >
        <Image
          src={"/logo.png"}
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
          className={`w-[200px] aspect-square transition-all duration-[1000ms] ease-in-out ${
            load ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="flex flex-col justify-center items-center text-fuchsia-500 font-medium text-[24px]">
          <div>We are here to help you </div>
          <div>be a better person</div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-10">
          <Link
            href={"/sign-in"}
            className="w-full max-w-[350px] px-6 py-3 font-bold text-[18px] text-white text-center rounded-3xl bg-blue-700 hover:scale-105 active:scale-95 transition-all"
          >
            LOG IN
          </Link>
          <Link href={"/sign-up"} className="flex justify-center w-full">
            <p className="pt-2 text-sm text-primaryBg hover:border-b-2 hover:border-black font-medium opacity-[90%] hover:opacity-[100%] transition-all">
              {"Don't have an account? Sign Up"}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
