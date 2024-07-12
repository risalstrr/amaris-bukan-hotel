/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";
import { auth, currentUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaArrowRight,
  FaBullseye,
  FaEdit,
  FaClipboardList,
} from "react-icons/fa";
import { Button } from "flowbite-react";

export default async function HomePage() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto p-6">
        <div className="text-center mb-4">
          <img
            src={user.imageUrl}
            alt="User"
            className="w-20 h-20 rounded-full mx-auto mb-2"
          />

          <h1 className="text-xl font-bold">Hello, {user.firstName}!</h1>
          <p className="text-gray-600 text-sm my-2">
            How you spend your days is how you spend your life. Let&apos;s make
            today count.
          </p>
        </div>
        <div className="bg-[#004AAD] text-white p-4 rounded-md shadow-md flex items-center justify-between mb-4">
          <Link href={"/home/detail"}>
            <div className="flex items-center">
              <FaCalendarAlt className="text-3xl mr-4" />
              <div>
                <p className="text-sm">You have 1 scheduled task(s) today.</p>
              </div>
            </div>
          </Link>

          <FaArrowRight className="text-2xl" />
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center justify-between">
            Goal
            <a
              href="#"
              className="text-[#004AAD] text-sm font-light flex items-center"
            >
              Edit Goal <FaEdit className="ml-1" />
            </a>
          </h2>
          <div className="flex items-center mt-2">
            <FaBullseye className="text-5xl text-blue-700 mr-4" />
            <p className="text-md">I want to... Reconnect with my daughter</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center justify-between">
            Plan
            <a
              href="#"
              className="text-blue-600 text-sm font-light flex items-center"
            >
              Edit Goal <FaEdit className="ml-1" />
            </a>
          </h2>
          <div className="flex items-center mt-2">
            <FaClipboardList className="text-5xl text-blue-700 mr-4" />
            <p className="text-md">
              I will reach my goal by... Attending family counseling
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
