import Link from "next/link";
import Image from "next/image";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
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
          <p className="font-bold text-xl text-black my-4 text-center tracking-wider">
            What do you want to bring into your life?
          </p>
          <div className="text-center font-light lg:w-3/5 w-full">
            Metamorph will help you create roadmaps to help you achieve your
            goals.
          </div>
        </div>

        <div className="w-full">
          <p className="font-bold text-md text-black text-start">
            I want to...
          </p>

          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your goal"
            required
          />
        </div>

        <div className="flex flex-col w-full justify-center items-center gap-10">
          <Link
            href={"/wishes"}
            className="lg:w-full w-4/5 max-w-[350px]  px-6 py-3 font-bold text-[18px] text-white text-center rounded-3xl bg-[#004AAD] hover:scale-105 active:scale-95 transition-all"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
