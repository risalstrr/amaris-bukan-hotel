import Link from "next/link";
import Image from "next/image";

import { currentUser } from "@clerk/nextjs";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const user = await currentUser();

  return (
    <div className="flex flex-col justify-center w-full min-h-screen">
      <div
        className={`absolute bottom-[10%] flex flex-col w-full justify-center items-center p-4 gap-5 transition-all duration-[2000ms] ease-in-out`}
      >
        <Image
          src={"/onboarding.png"}
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
          className={`w-[250px] h-[150px] aspect-square transition-all duration-[1000ms] ease-in-out`}
        />

        <div className="flex flex-col justify-center mt-5 mb-3 items-center text-gray-600 font-medium text-[17px]">
          <div className="text-center font-light w-full">
            &quot;I want to reconnect with my daughter&quot;
          </div>
          <p className="font-bold text-xl text-black my-4 text-center tracking-wide">
            Very well. Best of luck to you, {user?.firstName}
          </p>
        </div>

        <div className="flex flex-col w-full justify-center items-center gap-10">
          <Link
            href={"/quote"}
            className="lg:w-full w-4/5 max-w-[350px]  px-6 py-3 font-bold text-[18px] text-white text-center rounded-3xl bg-[#004AAD] hover:scale-105 active:scale-95 transition-all"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
